using System;
using System.Diagnostics;
using Volo.Abp.Application.Dtos;

namespace eduflm.BookStore.Books
{
    public class BookDto : AuditedEntityDto<Guid>
    {
        public Guid AuthorId { get; set; }
        public string AuthorName { get; set; }

        public string Name { get; set; }
        public BookType Type { get; set; }
        public DateTime PublishDate { get; set; }
        public string Price { get; set; }

    }
}
