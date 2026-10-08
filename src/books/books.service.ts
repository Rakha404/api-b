import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
    //sample data buku
    private books : Book[] = [
        {
            id : 1,
            title : "The Great Gatsby",
            author : "F. Scott Fitzgerald",
            isbn : "9780743273565",
            publishedYear : 1925,
            isAvaible : true
        },
        {
            id :2,
            title : "To Kill a Mockingbird",
            author : "Harper Lee",
            isbn : "9780061120084",
            publishedYear : 1960,
            isAvaible : false
        }
    ]

    //logic menampilkan data
    findAll() : Book[] {
        return this.books;
    }

    //simpan data
    simpanData(createBookDto: CreateBookDto) : Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedYear: createBookDto.publishedYear,
            isAvaible: createBookDto.isAvaible
        };

        //simpan data ke array books
        this.books.push(newBook);
        return newBook;
    }

    //update data
    updateData(id: number, createBookDto: CreateBookDto): Book {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Book dengan id ${id} tidak ditemukan`);
        }

        const updatedBook: Book = {
            id: id,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedYear: createBookDto.publishedYear,
            isAvaible: createBookDto.isAvaible
            };

            this.books[bookIndex] = updatedBook;
            return updatedBook;
    }

    // hapus data
    deleteData(id: number): Book {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
        throw new Error(`Book dengan id ${id} tidak ditemukan`);
    }

    // Simpan data yang akan dihapus untuk dijadikan return value
    const deletedBook = this.books[bookIndex];

    // Hapus data dari array
    this.books.splice(bookIndex, 1);

    return deletedBook;
}
}
