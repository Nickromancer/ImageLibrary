using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ImageLibrary.Application.UseCases.UploadImage;
using ImageLibrary.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ImageLibrary.Domain.Entities;
using ImageLibrary.Application.UseCases.GetImageById;
using ImageLibrary.Application.UseCases.GetThumbnailById;
using ImageLibrary.Application.UseCases.GetPictureById;


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
        public async Task<ActionResult<ImageResponse>> Post([FromForm] UploadImageRequest request)
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
        [HttpGet("{id}/thumbnail")]
        public async Task<IActionResult> GetImageThumbnail(Guid id)
        {
            var thumb = await _mediator.Send(new GetThumbnailByIdQuery(id));
            if (thumb?.Data is { Length: > 0 } data)
            {
                Response.Headers.CacheControl = "private, max-age=31536000, immutable";
                return File(data, "image/jpeg");
            }
            return await GetImagePicture(id); // fall back to the original
        }

        [Authorize]
        [HttpGet("{id}/picture")]
        public async Task<IActionResult> GetImagePicture(Guid id)
        {
            var picture = await _mediator.Send(new GetPictureByIdQuery(id));
            var meta = await _mediator.Send(new GetImageByIdQuery(id));
            if (picture?.Data is not { Length: > 0 } data || meta is null)
                return NotFound();

            return File(data, meta.ContentType);
        }
    }
}
