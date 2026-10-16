using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Domain.Entities;
using MediatR;

namespace ImageLibrary.Application.UseCases.GetAllTagsFromImage
{
    public record GetAllTagsFromImageQuery(Guid id) : IRequest<List<Tag>>;
}
