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
        private readonly IDataAccess _data;

        public UploadImageCommandHandler(IDataAccess data)
        {
            _data = data;
        }
        public Task<Image> Handle(UploadImageCommand request, CancellationToken cancellationToken)
        {
            Image image = new Image
            {
                Name = request.Name,
                Description = request.Description,
            };

            return Task.FromResult(_data.InsertImage(request.Name, request.Description));
            //return _data.AddImageAsync(image);

        }
    }
}
