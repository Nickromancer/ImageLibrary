using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;

namespace ImageLibrary.Application.UseCases.GetAllTagsFromImage
{
    public class GetAllTagsFromImageQueryHandler : IRequestHandler<GetAllTagsFromImageQuery, List<Tag>>
    {
        private readonly ITagRepository _data;

        public GetAllTagsFromImageQueryHandler(ITagRepository data)
        {
            _data = data;
        }
       
        public Task<List<Tag>> Handle(GetAllTagsFromImageQuery request, CancellationToken cancellationToken)
        {
            return _data.GetAllTagsFromImageAsync(request.id);
        }
    }
}
