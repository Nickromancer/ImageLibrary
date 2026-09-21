using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Server.Domain.Entities;

namespace ImageLibrary.Application.Interfaces
{
    public interface ITagRepository
    {
        Task<Tag> GetByIdAsync(int id);
        Task<List<Tag>> GetAllTagsAsync();
        Task<Tag> AddTagAsync(Tag tag);
        Task UpdateTagAsync(Tag tag);
        Task DeleteTagAsync(int id);
    }
}
