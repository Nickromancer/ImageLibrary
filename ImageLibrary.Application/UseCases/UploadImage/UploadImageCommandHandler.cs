using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;

namespace ImageLibrary.Application.UseCases.UploadImage
{
    public class UploadImageCommandHandler : IRequestHandler<UploadImageCommand, Image>
    {
        private readonly IImageRepository _data;

        public UploadImageCommandHandler(IImageRepository data)
        {
            _data = data;
        }
        public Task<Image> Handle(UploadImageCommand request, CancellationToken cancellationToken)
        {
            Image image = new Image
            {
                Name = request.Name,
                Description = request.Description,
                ImageData = request.ImageData,
                ContentType = request.ContentType,
            };

            return _data.AddImageAsync(image);
        }
    }
}
