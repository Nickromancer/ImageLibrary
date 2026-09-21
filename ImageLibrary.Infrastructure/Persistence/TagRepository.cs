using System;
using System.Collections.Generic;
using System.Text;
using ImageLibrary.Application.Interfaces;
using ImageLibrary.Server.Domain.Entities;
using ImageLibrary.Server.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace ImageLibrary.Infrastructure.Persistence
{
    public class TagRepository : ITagRepository
    {
        private readonly AppDbContext _context;
        public TagRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Tag> AddTagAsync(Tag tag)
        {
            await _context.AddAsync(tag);
            await _context.SaveChangesAsync();
            return tag;
        }

        public Task DeleteTagAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Tag>> GetAllTagsAsync()
        {
            return await _context.Tags.ToListAsync();
        }

        public Task<Tag> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateTagAsync(Tag tag)
        {
            throw new NotImplementedException();
        }
    }
}
