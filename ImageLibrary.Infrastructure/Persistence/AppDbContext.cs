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
                new Image() { Name = "CuteCat", Description = "Picture of Cat", Id = Guid.NewGuid() },
                new Image() { Name = "Doggy", Description = "Picture of Dog", Id = Guid.NewGuid() }
            );
        }
    }
}
