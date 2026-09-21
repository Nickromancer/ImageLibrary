using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Server.Domain.Entities;
using MediatR;

namespace ImageLibrary.Application.UseCases.GetAllTags
{
    public record GetAllTagsQuery() : IRequest<List<Tag>>;
}
