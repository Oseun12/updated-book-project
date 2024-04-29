import { BaseResponse } from "./base.response";

export interface RatingResponse extends BaseResponse {
    rating: number;
    comment: string;
    bookId: number;
}