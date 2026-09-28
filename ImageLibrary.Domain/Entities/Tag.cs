using Microsoft.EntityFrameworkCore;

namespace ImageLibrary.Domain.Entities;


[Index(nameof(Name), IsUnique = true)]
public class Tag
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public List<Image> Images { get; } = [];
}

