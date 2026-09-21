using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;

namespace ImageLibrary.Application.UseCases.UploadTag
{
    public class UploadTagCommandHandler : IRequestHandler<UploadTagCommand, Tag>
    {
        private readonly ITagRepository _data;

        public UploadTagCommandHandler(ITagRepository data)
        {
            _data = data;
        }
        public Task<Tag> Handle(UploadTagCommand request, CancellationToken cancellationToken)
        {
            Tag tag = new Tag
            {
                Name = request.Name
            };

            return _data.AddTagAsync(tag);
        }
    }
}
