using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Server.Domain.Entities;
using MediatR;

namespace ImageLibrary.Application.UseCases.UploadImage
{
    public record UploadImageCommand(string Name, string Description, byte[] ImageData, string ContentType) : IRequest<Image>;
}
