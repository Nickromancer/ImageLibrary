using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Domain.Entities;

namespace ImageLibrary.Application.Interfaces
{
    public interface IImageRepository
    {
        Task<Image> GetImageByIdAsync(Guid id, CancellationToken cancellation);
        Task<ImagePicture> GetImagePictureByIdAsync(Guid id, CancellationToken cancellation);
        Task<ImageThumbnail> GetImageThumbnailByIdAsync(Guid id, CancellationToken cancellation);
        Task<List<Image>> GetAllImagesAsync();
        Task<Image> AddImageAsync(Image image);
        Task<Image> UpdateImageAsync(Guid id, string Name, string Description, IEnumerable<string> tagNames);
        Task DeleteImageAsync(Guid id, CancellationToken cancellation);
    }
}
