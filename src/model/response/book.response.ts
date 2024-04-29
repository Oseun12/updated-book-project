import { BaseResponse } from "./base.response";
import { RatingResponse } from "./rating.response";
import { UserResponse } from "./user.response";

export interface BookResponse extends BaseResponse{
    title: string;
    isbn: string;
    authorId: UserResponse;
    rating: RatingResponse;
}