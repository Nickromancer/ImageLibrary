using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ImageLibrary.Application.UseCases.UploadImage;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ImageLibrary.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ImageController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ImageController(IMediator mediator)
        {
            _mediator = mediator;
        }

        //[HttpPost]
        //public async Task<Image> Post([FromBody] Image value)
        //{
        //    return await _mediator.Send(new UploadImageCommand(value.Name, value.Description, value.ImageData, value.ContentType));
        //}

        [HttpPost]
        [RequestSizeLimit(50_000_000)]
        public async Task<ActionResult<Image>> Post([FromForm] string name, [FromForm] string description, [FromForm] IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            var allowedTypes = new[] { "image/jpeg", "image/png", "image/gif", "image/webp" };
            if (!allowedTypes.Contains(file.ContentType))
                return BadRequest("Unsupported file type.");

            using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);

            var result = await _mediator.Send(new UploadImageCommand(
                name,
                description,
                memoryStream.ToArray(),
                file.ContentType
            ));

            return Ok(result);
        }

        [HttpGet]
        public async Task<List<Image>> Get()
        {
            return await _mediator.Send(new GetAllImagesQuery());
        }
    }
}
