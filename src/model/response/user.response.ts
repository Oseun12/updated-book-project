import { AppRole } from "../enums/app.role";
import { BaseResponse } from "./base.response";

export interface UserModel extends BaseResponse {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    role: AppRole;
}