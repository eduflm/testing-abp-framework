using System.Threading.Tasks;

namespace eduflm.BookStore.Data;

public interface IBookStoreDbSchemaMigrator
{
    Task MigrateAsync();
}
