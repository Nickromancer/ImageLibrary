using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Server.Domain.Entities;

namespace ImageLibrary.Application.Interfaces
{
    public interface IImageRepository
    {
        Task<Image> GetByIdAsync(int id);
        Task<List<Image>> GetAllImagesAsync();
        Task<Image> AddImageAsync(Image image);
        Task UpdateImageAsync(Image image);
        Task DeleteImageAsync(int id);
    }
}
