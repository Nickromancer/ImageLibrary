using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;

namespace ImageLibrary.Application.UseCases.GetImageById
{
    public class GetImageByIdQueryHandler : IRequestHandler<GetImageByIdQuery, Image>
    {
        private readonly IImageRepository _data;

        public GetImageByIdQueryHandler(IImageRepository data)
        {
            _data = data;
        }
       
        public Task<Image> Handle(GetImageByIdQuery request, CancellationToken cancellationToken)
        {
            return _data.GetByIdAsync(request.id, cancellationToken);
        }
    }
}
