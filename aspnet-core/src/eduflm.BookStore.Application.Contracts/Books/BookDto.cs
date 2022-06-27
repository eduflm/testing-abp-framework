using System;
using Volo.Abp.Application.Dtos;

namespace eduflm.BookStore.Books
{
    public class BookDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }
        public BookType Type { get; set; }
        public DateTime PublishDate { get; set; }
        public string Price { get; set; }
    }
}
