using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;

namespace ImageLibrary.Application.UseCases.GetThumbnailById
{
    public class GetPictureByIdHandler : IRequestHandler<GetThumbnailByIdQuery, ImageThumbnail>
    {
        private readonly IImageRepository _data;

        public GetPictureByIdHandler(IImageRepository data)
        {
            _data = data;
        }
       
        public Task<ImageThumbnail> Handle(GetThumbnailByIdQuery request, CancellationToken cancellationToken)
        {
            return _data.GetImageThumbnailByIdAsync(request.Id, cancellationToken);
        }
    }
}
