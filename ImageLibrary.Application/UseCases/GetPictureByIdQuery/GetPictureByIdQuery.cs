using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Domain.Entities;
using MediatR;

namespace ImageLibrary.Application.UseCases.GetPictureById
{
    public record GetPictureByIdQuery(Guid Id) : IRequest<ImagePicture>;
}
