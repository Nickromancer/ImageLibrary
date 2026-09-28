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
            List<Tag> allTags;
            if (request.Tags.Length != 0)
            {
                var existingTags = await _tagRepo.GetAllTagsAsync();
                var existingNames = existingTags.Select(t => t.Name).ToHashSet(StringComparer.OrdinalIgnoreCase);

                var newTags = request.Tags
                    .Where(name => !existingNames.Contains(name))
                    .Select(name => new Tag { Name = name });

                allTags = existingTags
                    .Where(t => request.Tags.Contains(t.Name, StringComparer.OrdinalIgnoreCase))
                    .Concat(newTags)
                    .ToList();
            }
            else
            {
                allTags = new List<Tag>();
            }

            using var sharpImage = Sharp.Image.Load(request.ImageData);
            sharpImage.Mutate(x => x.Resize(new ResizeOptions
            {
                Mode = ResizeMode.Max,
                Size = new Sharp.Size(400, 400),
            }));

            using var thumbStream = new MemoryStream();
            await Sharp.ImageExtensions.SaveAsJpegAsync(sharpImage, thumbStream, cancellationToken);
            var thumbnailData = thumbStream.ToArray();

            var image = new Image
            {
                Name = request.Name,
                Description = request.Description,
                Picture = new ImagePicture {Data = request.ImageData },
                Thumbnail = new ImageThumbnail { Data = thumbnailData },
                ContentType = request.ContentType,
                Tags = allTags,
                CreatedAt = DateTime.UtcNow,
            };

            return await _imageRepo.AddImageAsync(image);
        }
    }
}
