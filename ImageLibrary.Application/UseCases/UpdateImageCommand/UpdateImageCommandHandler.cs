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


namespace ImageLibrary.Application.UseCases.UpdateImage

{
    public class UpdateImageCommandHandler : IRequestHandler<UpdateImageCommand, Image>
    {
        private readonly IImageRepository _imageRepo;
        private readonly ITagRepository _tagRepo;

        public UpdateImageCommandHandler(IImageRepository imageRepo, ITagRepository tagRepo)
        {
            _imageRepo = imageRepo;
            _tagRepo = tagRepo;
        }
        public async Task<Image> Handle(UpdateImageCommand request, CancellationToken cancellationToken)
        {
            IEnumerable<string> allTags = request.Tags
                .Select(n => n.Trim())
                .Where(n => n.Length > 0)
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();

            return await _imageRepo.UpdateImageAsync(request.id, request.Name, request.Description, allTags);
        }
    }
}
