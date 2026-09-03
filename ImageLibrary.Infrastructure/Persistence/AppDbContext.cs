using System.Reflection.Emit;
using ImageLibrary.Server.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ImageLibrary.Server.Infrastructure.Persistence
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Image> Images{ get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Image>().HasKey(p => p.Id);

            // Seed data
            modelBuilder.Entity<Image>().HasData(
                new Image() { Name = "CuteCat", Description = "Picture of Cat", Id = new Guid("11111111-1111-1111-1111-111111111111") },
                new Image() { Name = "Doggy", Description = "Picture of Dog", Id = new Guid("22222222-2222-2222-2222-222222222222") }
            );
        }
    }
}
