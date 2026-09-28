using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;

namespace ImageLibrary.Application.UseCases.GetPictureById
{
    public class GetPictureByIdHandler : IRequestHandler<GetPictureByIdQuery, ImagePicture>
    {
        private readonly IImageRepository _data;

        public GetPictureByIdHandler(IImageRepository data)
        {
            _data = data;
        }
       
        public Task<ImagePicture> Handle(GetPictureByIdQuery request, CancellationToken cancellationToken)
        {
            return _data.GetImagePictureByIdAsync(request.Id, cancellationToken);
        }
    }
}
