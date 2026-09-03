namespace ImageLibrary.Server.Domain.Entities
{
    public class Image
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public ICollection<Tag> Tags { get; set; } = new List<Tag>();

        public Image() 
        {
        }
    }
}
