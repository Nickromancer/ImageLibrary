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
    public class GetAllImagesQueryHandler : IRequestHandler<GetAllImagesQuery, List<Image>>
    {
        private readonly IImageRepository _data;

        public GetAllImagesQueryHandler(IImageRepository data)
        {
            _data = data;
        }
       
        public Task<List<Image>> Handle(GetAllImagesQuery request, CancellationToken cancellationToken)
        {
            return _data.GetAllImagesAsync();
        }
    }
}
