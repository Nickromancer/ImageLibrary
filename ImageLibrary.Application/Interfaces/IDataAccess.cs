using System.Collections.Generic;
using ImageLibrary.Domain.Entities;

namespace ImageLibrary.Infrastructure.Persistence;

public interface IDataAccess
{
    Image InsertImage(string name, string description);
    List<Image> GetAllImages();
}