using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ImageLibrary.Application.UseCases.UploadImage;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
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

        [HttpPost]
        public async Task<Image> Post([FromBody] Image value)
        {
            return await _mediator.Send(new UploadImageCommand(value.Name, value.Description));
        }

        [HttpGet]
        public async Task<List<Image>> Get()
        {
            return await _mediator.Send(new GetAllImagesQuery());
        }
    }
}
