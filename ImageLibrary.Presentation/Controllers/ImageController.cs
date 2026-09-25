using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ImageLibrary.Application.UseCases.UploadImage;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ImageLibrary.Domain.Entities;
using ImageLibrary.Application.UseCases.GetImageById;

namespace ImageLibrary.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ImageController : ControllerBase
    {
        public record ImageResponse(
            Guid Id,
            string Name,
            string Description,
            string ContentType,
            DateTime CreatedAt,
            DateTime UpdatedAt,
            List<string> Tags
        );
        private readonly IMediator _mediator;

        public ImageController(IMediator mediator)
        {
            _mediator = mediator;
        }

        public class UploadImageRequest
        {
            public string Name { get; set; }
            public string Description { get; set; }
            public IFormFile File { get; set; }
            public string[] Tags { get; set; }
        }

        [Authorize]
        [HttpPost]
        [RequestSizeLimit(50_000_000)]
        public async Task<ActionResult<Image>> Post([FromForm] UploadImageRequest request)
        {
            if (request.File == null || request.File.Length == 0)
                return BadRequest("No file uploaded.");

            var allowedTypes = new[] { "image/jpeg", "image/png", "image/gif", "image/webp" };
            if (!allowedTypes.Contains(request.File.ContentType))
                return BadRequest("Unsupported file type.");

            using var memoryStream = new MemoryStream();
            await request.File.CopyToAsync(memoryStream);

            var result = await _mediator.Send(new UploadImageCommand(
                request.Name,
                request.Description,
                memoryStream.ToArray(),
                request.File.ContentType,
                request.Tags
            ));

            return Ok(new ImageResponse(
                result.Id,
                result.Name,
                result.Description,
                result.ContentType,
                result.CreatedAt,
                result.UpdatedAt,
                result.Tags.Select(t => t.Name).ToList()
            ));
        }

        [Authorize]
        [HttpGet]
        public async Task<List<Image>> Get()
        {
            return await _mediator.Send(new GetAllImagesQuery());
        }

        [Authorize]
        [HttpGet("{id}/content")]
        public async Task<IActionResult> GetImageContent(Guid id)
        {
            var image = await _mediator.Send(new GetImageByIdQuery(id));
            if (image == null) return NotFound();

            return File(image.ImageData, image.ContentType);
        }
    }
}
