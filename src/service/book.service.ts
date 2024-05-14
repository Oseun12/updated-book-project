import { BookRequest } from "../model/request/book.request";
import { Book } from "../persistence/entity/book";
import { User } from "../persistence/entity/user";

export async function createBook(request: BookRequest): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
        //authentication
        Book.findOne({ where: { isbn: request.isbn } }).then(async(book) => {
            if (book) {
                console.log("Book already exists");
                throw Error("Book already exists");
            }
            // Create a new book...
            const newBook = new Book({
                title: request.title,
                isbn: request.isbn,
                //author: request.authorId,
                authorId: request.authorId,
                createdAt: new Date(),
                createdBy: "system",
                updatedAt: new Date(),
                updatedBy: "system"
            });
            // Save the book
            newBook.save().then((book) => {
                console.log("Book created successfully");
                resolve(book);
            }).catch((error) => {
                console.error("Error creating book:", error);
                reject(null);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function updateBook(request: BookRequest, id: number): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
        Book.findByPk(id).then(async(book) => {
            if (!book) {
                console.log("Book not found");
                throw Error("Book not found");
            }

            let authorId = await User.findByPk(request.authorId);;
            if (!authorId) {
                console.log("Author not found");
                throw Error("Author not found");
            }
            // Update the book
            if (request.title) book.title = request.title;
            book.isbn = request.isbn;
            if (authorId) book.authorId = authorId.id;
            book.updatedAt = new Date();
            book.updatedBy = "system";

            // Save the book
            book.save().then((book) => {
                console.log("Book updated successfully");
                resolve(book);
            }).catch((error) => {
                console.error("Error updating book:", error);
                reject(null);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function deleteBook(id: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        Book.findByPk(id).then(async(book) => {
            if (!book) {
                console.log("Book not found");
                throw Error("Book not found");
            }
            // Delete the book
            book.destroy().then(() => {
                console.log("Book deleted successfully");
                resolve(true);
            }).catch((error) => {
                console.error("Error deleting book:", error);
                resolve(false);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function getBookById(id: number): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
        Book.findByPk(id).then(async(book) => {
            if (!book) {
                console.log("Book not found");
                throw Error("Book not found");
            }
            console.log("Book found");
            resolve(book);
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function getBooks(): Promise<Book[]> {
    return new Promise<Book[]>((resolve, reject) => {
        Book.findAll().then(async(books) => {
            console.log("Books found");
            resolve(books);
        }).catch((error) => {
            reject(error);
        });
    });
}