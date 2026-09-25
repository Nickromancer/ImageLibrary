using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Server.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ImageLibrary.Infrastructure.Persistence;

namespace ImageLibrary.Application.UseCases.UploadImage
{
    public class UploadÍmageCommandHandler : IRequestHandler<UploadImageCommand, Image>
    {
        private readonly IImageRepository _imageRepo;
        private readonly ITagRepository _tagRepo;

        public UploadÍmageCommandHandler(IImageRepository imageRepo, ITagRepository tagRepo)
        {
            _imageRepo = imageRepo;
            _tagRepo = tagRepo;
        }
        public async Task<Image> Handle(UploadImageCommand request, CancellationToken cancellationToken)
        {

            var existingTags = await _tagRepo.GetAllTagsAsync();
            var existingNames = existingTags.Select(t => t.Name).ToHashSet(StringComparer.OrdinalIgnoreCase);

            var newTags = request.Tags
                .Where(name => !existingNames.Contains(name))
                .Select(name => new Tag { Name = name });

            var allTags = existingTags
                .Where(t => request.Tags.Contains(t.Name, StringComparer.OrdinalIgnoreCase))
                .Concat(newTags)
                .ToList();

            var image = new Image
            {
                Name = request.Name,
                Description = request.Description,
                ImageData = request.ImageData,
                ContentType = request.ContentType,
                Tags = allTags,
                CreatedAt = DateTime.UtcNow,
            };


            return await _imageRepo.AddImageAsync(image);
        }
    }
}
