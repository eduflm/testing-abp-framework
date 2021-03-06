using AutoMapper;
using eduflm.BookStore.Authors;
using eduflm.BookStore.Books;

namespace eduflm.BookStore;

public class BookStoreApplicationAutoMapperProfile : Profile
{
    public BookStoreApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */

        CreateMap<Book, BookDto>();
        CreateMap<CreateUpdateBookDto, Book>();

        CreateMap<Author, AuthorDto>();
        CreateMap<Author, AuthorLookupDto>();
    }
}
