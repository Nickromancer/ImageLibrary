using Microsoft.EntityFrameworkCore;

namespace ImageLibrary.Server.Domain.Entities;


[Index(nameof(Name), IsUnique = true)]
public class Tag
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public List<Image> Images { get; } = [];

}

