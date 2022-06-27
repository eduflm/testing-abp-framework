using eduflm.BookStore.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace eduflm.BookStore;

[DependsOn(
    typeof(BookStoreEntityFrameworkCoreTestModule)
    )]
public class BookStoreDomainTestModule : AbpModule
{

}
