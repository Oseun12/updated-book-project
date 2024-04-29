import { Session } from 'express-session';

declare module 'express' {
    interface Request {
        session: Session;
    }
}

// import { BookRequest } from "../model/request/book.request";
// import { Book } from "../persistence/entity/book";
// import { User } from "../persistence/entity/user";

// export async function createBook(request: BookRequest, userId: number): Promise<Book> {
//     return new Promise<Book>(async (resolve, reject) => {
//         try {
//             // Check if the user has permission to create a book
//             const user = await User.findByPk(userId);
//             if (!user || !user.hasPermission('create_book')) {
//                 console.log("User does not have permission to create a book");
//                 throw new Error("User does not have permission to create a book");
//             }

//             // Check if the book already exists
//             const existingBook = await Book.findOne({ where: { isbn: request.isbn } });
//             if (existingBook) {
//                 console.log("Book already exists");
//                 throw new Error("Book already exists");
//             }

//             // Create a new book
//             const newBook = new Book({
//                 title: request.title,
//                 isbn: request.isbn,
//                 authorId: request.authorId,
//                 createdAt: new Date(),
//                 createdBy: user.username, // Assuming you want to track who created the book
//                 updatedAt: new Date(),
//                 updatedBy: user.username
//             });

//             // Save the book
//             const savedBook = await newBook.save();
//             console.log("Book created successfully");
//             resolve(savedBook);
//         } catch (error) {
//             console.error("Error creating book:", error);
//             reject(null);
//         }
//     });
// }




/**const tokenString = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJlbWFpbCI6ImpvaG5kb2VAcm1hcGwuY29tIiwiYXV0aG9yaXRpZXMiOlsiQXBwUm9sZS5BVVRIT1IiXSwiaWF0IjoxNzE0MDM5NzQ0LCJleHAiOjE3MTQwMzk3NDR9.5qHMjPJoEIOv1wQQaKJ0VJlh5IEjbbI0vRIqklj7P3k";

// Splice the first 7 characters (including "Bearer ")
const token = tokenString.substring(7); // or tokenString.slice(7)

console.log(token); // Output: eyJhbGciOiJIUzI1NiIsInR5...

// If you want to split the token into parts after splicing:
const tokenParts = token.split('.');
console.log(tokenParts);**/ 