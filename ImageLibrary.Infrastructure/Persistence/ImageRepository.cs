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

        public Task DeleteImageAsync(int id)
        {
            throw new NotImplementedException();
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

        public Task UpdateImageAsync(Image image)
        {
            throw new NotImplementedException();
        }
    }
}
