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

        private readonly IDataAccess _context;
        public ImageRepository(IDataAccess context)
        {
            _context = context;
        }

        public async Task<Image> AddImageAsync(Image image)
        {
            //await _context.Images.AddAsync(image);
            //await _context.SaveChangesAsync();
            _context.InsertImage(image.Name, image.Description);
            return image;
        }

        public Task DeleteImageAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Image>> GetAllImagesAsync()
        {
            throw new NotImplementedException();
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
