import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookDto, BookService, bookTypeOptions } from '@proxy/books';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class BookComponent implements OnInit {

  book = { items: [], totalCount: 0 } as PagedResultDto<BookDto>;

  form: FormGroup;
  bookTypes = bookTypeOptions;

  isModalOpen = false;

  selectedBook = {} as BookDto;

  constructor(public readonly list: ListService, private bookService: BookService, private fb: FormBuilder, private confirmation: ConfirmationService) { }

  ngOnInit(): void {
    const bookStreamCreator = (query) => this.bookService.getList(query);
    this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
      this.book = response
    })
  }

  createBook() {
    this.selectedBook = {} as BookDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: [null, Validators.required],
      publishDate: [null, Validators.required],
      price: [null, Validators.required],
    })
  }

  editBook(id: string) {
    this.bookService.get(id).subscribe((book) => {
      this.selectedBook = book;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  save() {
    if (this.form.invalid) return

    const request = this.selectedBook.id
      ? this.bookService.update(this.selectedBook.id, this.form.value)
      : this.bookService.create(this.form.value);


    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    })
  }

  delete(id : string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.bookService.delete(id).subscribe(() => this.list.get())
      }
    })
  }

}
