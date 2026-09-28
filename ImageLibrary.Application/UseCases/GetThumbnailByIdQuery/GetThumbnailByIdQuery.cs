using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Domain.Entities;
using MediatR;

namespace ImageLibrary.Application.UseCases.GetThumbnailById
{
    public record GetThumbnailByIdQuery(Guid Id) : IRequest<ImageThumbnail>;
}
