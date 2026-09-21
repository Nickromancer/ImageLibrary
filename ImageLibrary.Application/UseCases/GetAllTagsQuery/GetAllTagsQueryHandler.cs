using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;

namespace ImageLibrary.Application.UseCases.GetAllTags
{
    public class GetAllTagsQueryHandler : IRequestHandler<GetAllTagsQuery, List<Tag>>
    {
        private readonly ITagRepository _data;

        public GetAllTagsQueryHandler(ITagRepository data)
        {
            _data = data;
        }
       
        public Task<List<Tag>> Handle(GetAllTagsQuery request, CancellationToken cancellationToken)
        {
            return _data.GetAllTagsAsync();
        }
    }
}
