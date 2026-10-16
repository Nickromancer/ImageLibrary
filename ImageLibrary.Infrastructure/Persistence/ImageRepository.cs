using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Domain.Entities;
using ImageLibrary.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace ImageLibrary.Infrastructure.Persistence
{
    public class ImageRepository : IImageRepository
    {
        private readonly AppDbContext _context;
        public ImageRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Image> AddImageAsync(Image image)
        {
            //await _context.Images.AddAsync(image);
            //await _context.SaveChangesAsync
            await _context.AddAsync(image);
            await _context.SaveChangesAsync();
            return image;
        }

        public async Task DeleteImageAsync(Guid id, CancellationToken cancellationToken = default)
        {
            await _context.Images.AsNoTracking().Where(i => i.Id == id).ExecuteDeleteAsync(cancellationToken);
        }

        public async Task<List<Image>> GetAllImagesAsync()
        {
            return await _context.Images.ToListAsync();
        }

        public async Task<Image?> GetImageByIdAsync(Guid id, CancellationToken cancellationToken = default)
        {
            return await _context.Images
                .AsNoTracking()
                .Include(i => i.Tags)
                .FirstOrDefaultAsync(i => i.Id == id, cancellationToken);
        }

        public async Task<ImagePicture?> GetImagePictureByIdAsync(Guid id, CancellationToken cancellationToken = default)
        {
            return await _context.ImagePicture
                .AsNoTracking()
                .FirstOrDefaultAsync(i => i.ImageId == id, cancellationToken);
        }

        public async Task<ImageThumbnail?> GetImageThumbnailByIdAsync(Guid id, CancellationToken cancellationToken = default)
        {
            return await _context.ImageThumbnail
                .AsNoTracking()
                .FirstOrDefaultAsync(i => i.ImageId == id, cancellationToken);
        }

        public async Task<Image> UpdateImageAsync(
            Guid id, string name, string description, IEnumerable<string> tagNames)
        {
            var img = await _context.Images
                .Include(i => i.Tags)
                .FirstOrDefaultAsync(i => i.Id == id)
                ?? throw new KeyNotFoundException($"Image {id} not found.");

            img.Name = name;
            img.Description = description;

            var names = tagNames
                .Select(n => n.Trim())
                .Where(n => n.Length > 0)
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();

            var existing = await _context.Tags
                .Where(t => names.Contains(t.Name))
                .ToListAsync();

            var missing = names
                .Except(existing.Select(t => t.Name), StringComparer.OrdinalIgnoreCase)
                .Select(n => new Tag { Name = n });

            img.Tags.Clear();
            foreach (var tag in existing.Concat(missing))
                img.Tags.Add(tag);

            img.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return img;
        }
    }
}
