import { Request, Response } from 'express';
import { BookRequest } from "../model/request/book.request";
import service from '../service/services';


export async function createBook( req: Request, res: Response) {
    try {
        console.log('Request object', req.body);
        const request: BookRequest = req.body;
        const book = await service.bookService.createBook(request);
        if (book) {
            res.status(201).json(book);
        } else {
            res.status(400).json({ message: "Error creating book" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateBook(req: Request, res: Response) {
    try {
        const request: BookRequest = req.body;
        const id = parseInt(req.params.id);
        const book = await service.bookService.updateBook(request, id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(400).json({ message: "Error updating book" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteBook(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const result = await service.bookService.deleteBook(id);
        if (result) {
            res.status(200).json({ message: "Book deleted successfully" });
        } else {
            res.status(400).json({ message: "Error deleting book" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getBookById(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const book = await service.bookService.getBookById(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getAllBooks(req: Request, res: Response) {
    try {
        const books = await service.bookService.getBooks();
        if (books) {
            res.status(200).json(books);
        } else {
            res.status(404).json({ message: "Books not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
