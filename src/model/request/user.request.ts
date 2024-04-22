import { AppRole } from "../enums/app.role";

export interface UserRequest {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    role: AppRole;
}