using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;
using Sharp = SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.Formats.Jpeg;


namespace ImageLibrary.Application.UseCases.DeleteImage

{
    public class DeleteImageCommandHandler : IRequestHandler<DeleteImageCommand>
    {
        private readonly IImageRepository _imageRepo;

        public DeleteImageCommandHandler(IImageRepository imageRepo)
        {
            _imageRepo = imageRepo;
        }
        public async Task Handle(DeleteImageCommand request, CancellationToken cancellationToken)
        {
           await _imageRepo.DeleteImageAsync(request.id, cancellationToken);
        }
    }
}
