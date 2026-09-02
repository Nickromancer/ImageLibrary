using ImageLibrary.Infrastructure.Persistence;
using ImageLibrary.Server.Domain.Entities;

namespace ImageLibrary.Application;

public class DemoDataAccess : IDataAccess
{
    private List<Image> images = new();

    public DemoDataAccess()
    {
        images.Add(new Image() { Name = "CuteCat", Description = "Picture of Cat", Id = Guid.NewGuid() });
        images.Add(new Image() { Name = "Damn Dog", Description = "Picture of Dog", Id = Guid.NewGuid() });
    }
    public Image InsertImage(string name, string description)
    {
        Image i = new Image() { Name = name, Description = description};
        images.Add(i);
        return i;
    }

    public List<Image> GetAllImages()
    {
        return images;
    }
}
