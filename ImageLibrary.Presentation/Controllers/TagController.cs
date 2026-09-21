using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ImageLibrary.Application.UseCases.GetAllTags;
using ImageLibrary.Application.UseCases.UploadTag;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ImageLibrary.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TagController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TagController(IMediator mediator)
        {
            _mediator = mediator;
        }

        public class UploadTagRequest
        {
            public required string Name { get; set; }
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Tag>> Post([FromForm] UploadTagRequest request)
        {
            var result = await _mediator.Send(new UploadTagCommand(
                request.Name
            ));

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        public async Task<List<Tag>> Get()
        {
            return await _mediator.Send(new GetAllTagsQuery());
        }
    }
}
