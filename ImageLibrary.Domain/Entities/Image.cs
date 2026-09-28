namespace ImageLibrary.Server.Domain.Entities
{
    public class Image
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public required string ContentType { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public ImagePicture Picture { get; set; } = new ImagePicture();
        public ImageThumbnail Thumbnail { get; set; } = new ImageThumbnail();

        public ICollection<Tag> Tags { get; set; } = new List<Tag>();
    }
    public class ImagePicture
    {
        public Guid ImageId { get; set; }         
        public Image Image { get; set; } = null!;
        public byte[] Data { get; set; } = [];
    }
    public class ImageThumbnail
    {
        public Guid ImageId { get; set; }          
        public Image Image { get; set; } = null!;
        public byte[] Data { get; set; } = [];
    }
}
