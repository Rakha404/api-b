import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('books') //decorator
export class BooksController {
    //menampilkan data
    @Get()
    findAll() : string {
        return 'Menampilkan semua data buku';
    }

    //menyimpan data
    @Post()
    simpanData() : string {
        return 'Menyimpan data buku';
    }

    //mengupdate data
    @Put(':id')
    updateData(@Param('id') id: string): string{
        return `Mengupdate data buku dengan id ${id}`;
    }

    //menghapus data
    @Delete(':id')
    deleteData(@Param('id') id: string): string {
        return `Menghapus data buku dengan id ${id}`;
    }
}
