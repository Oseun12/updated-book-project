import { User } from "../persistence/entity/user";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import service from '../service/services';

export async function generateToken(username: string, password: string): Promise<TokenResponse> {

    const user = await service.userService.getUserByUsername(username);
    console.log('user: ', user.get());

    const token = jwt.sign(
        { username: user.username, email: user?.email, authorities: [user.role] },
        "0123456789010987654321@1200000022",
        {
            expiresIn: "3600",
        }
    );
    return {
        access_token: token,
        expires_in: '3600'
    }
}

export interface TokenResponse {
    access_token: string;
    expires_in: string;
}