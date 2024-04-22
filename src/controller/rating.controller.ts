import { Request, Response } from "express";
import { RatingRequest } from "../model/request/rating.request";
import service from '../service/services';


export async function createRating(req: Request, res: Response) {
    try {
        const request: RatingRequest = req.body;
        const rating = await service.ratingService.createRating(request);
        if (rating) {
            res.status(201).json(rating);
        } else {
            res.status(400).json({ message: "Error creating rating" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateRating(req: Request, res: Response) {
    try {
        const request: RatingRequest = req.body;
        const id = parseInt(req.params.id);
        const rating = await service.ratingService.updateRating(request, id);
        if (rating) {
            res.status(200).json(rating);
        } else {
            res.status(400).json({ message: "Error updating rating" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteRating(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        const result = await service.ratingService.deleteRating(id);
        if (result) {
            res.status(200).json({ message: "Rating deleted successfully" });
        } else {
            res.status(400).json({ message: "Error deleting rating" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function averageRating(req: Request, res: Response) {
    try {
        const bookId: number = parseInt(req.params.bookId);
        const rating = await service.ratingService.averageRating(bookId);
        if (rating) {
            res.status(200).json(rating);
        } else {
            res.status(400).json({ message: "Error getting average rating" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
