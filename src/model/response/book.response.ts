import { BaseResponse } from "./base.response";
import { RatingResponse } from "./rating.response";

export interface BookResponse extends BaseResponse{
    title: string;
    isbn: string;
    authorId: BaseResponse;
    rating: RatingResponse;
}