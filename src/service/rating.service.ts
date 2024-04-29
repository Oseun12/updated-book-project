import { RatingRequest } from '../model/request/rating.request';
import { Rating } from '../persistence/entity/rating';


export async function createRating(request: RatingRequest): Promise<Rating> {
    return new Promise<Rating>((resolve, reject) => {
        // Create a new rating
        const newRating = new Rating({
            rating: request.rating,
            bookId: request.bookId,
            createdAt: new Date(),
            createdBy: "system"
        });
        // Save the rating
        newRating.save().then((rating) => {
            console.log("Rating created successfully");
            resolve(rating);
        }).catch((error) => {
            console.error("Error creating rating:", error);
            reject(null);
        });
    });
}

export async function updateRating(request: RatingRequest, id: number): Promise<Rating> {
    return new Promise<Rating>((resolve, reject) => {
        Rating.findByPk(id).then(async(rating) => {
            if (!rating) {
                console.log("Rating not found");
                throw Error("Rating not found");
            }
            // Update the rating
            rating.rating = request.rating;
            rating.updatedAt = new Date();
            rating.updatedBy = "system";

            // Save the rating
            rating.save().then((rating) => {
                console.log("Rating updated successfully");
                resolve(rating);
            }).catch((error) => {
                console.error("Error updating rating:", error);
                reject(null);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function deleteRating(id: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        Rating.findByPk(id).then((rating) => {
            if (!rating) {
                console.log("Rating not found");
                throw Error("Rating not found");
            }
            // Delete the rating
            rating.destroy().then(() => {
                console.log("Rating deleted successfully");
                resolve(true);
            }).catch((error) => {
                console.error("Error deleting rating:", error);
                resolve(false);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function averageRating(bookId: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        Rating.findAll({ where: { bookId: bookId } }).then((ratings) => {
            if (ratings.length === 0) {
                console.log("No ratings found");
                resolve(0);
            }
            let total = 0;
            ratings.forEach((rating) => {
                total += rating.rating;
            });
            const average = total / ratings.length;
            resolve(average);
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function getRatingById(id: number): Promise<Rating> {
    return new Promise<Rating>((resolve, reject) => {
        Rating.findByPk(id).then((rating) => {
            if (!rating) {
                console.log("Rating not found");
                throw Error("Rating not found");
            }
            resolve(rating);
        }).catch((error) => {
            reject(error);
        });
    });
}
