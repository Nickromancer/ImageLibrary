using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Server.Domain.Entities;
using ImageLibrary.Server.Infrastructure.Persistence;
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

        public Task<Image> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateImageAsync(Image image)
        {
            throw new NotImplementedException();
        }
    }
}
