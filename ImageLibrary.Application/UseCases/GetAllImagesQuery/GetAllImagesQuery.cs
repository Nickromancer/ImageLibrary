using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Domain.Entities;
using MediatR;

namespace ImageLibrary.Application.UseCases.UploadImage
{
    public record GetAllImagesQuery() : IRequest<List<Image>>;
}
