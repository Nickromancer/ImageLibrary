using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Domain.Entities;
using MediatR;

namespace ImageLibrary.Application.UseCases.UpdateImage
{
    public record UpdateImageCommand(Guid id, string Name, string Description, string[] Tags) : IRequest<Image>;
}
