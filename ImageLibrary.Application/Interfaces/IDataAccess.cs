using System.Collections.Generic;
using ImageLibrary.Server.Domain.Entities;

namespace ImageLibrary.Infrastructure.Persistence;

public interface IDataAccess
{
    Image InsertImage(string name, string description);
    List<Image> GetAllImages();
}