import { User } from "../persistence/entity/user";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import service from '../service/services';
import nodemailer from 'nodemailer'
import { send } from "process";


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'marrizzsalau7@gmail.com',
        pass: 'zzzzzzzzzzzzzzzzz'
    }
})

export async function generateToken(username: string, password: string, email: string): Promise<TokenResponse> {

    const user = await service.userService.getUserByUsernameOrEmail(username, password);
    console.log('user: ', user.get());

    if (!user) {
        throw new Error('User not found')
    }
    // Extract email from the user object

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

export async function sendWelcomeEmail(email: string, user: User) {
    try {
        const emailContent = 
            `Thank you for signing up, You can proceed to logging in and showing us the books you have for us!
            Logging Detail: 
            Username: ${user.username}
            Email: ${user.email}
            
            Enjoy using My Bookshop!
        `;
        // Send email
        await transporter.sendMail({
            from: 'marrizzsalau7@gmail.com',
            to: user.email,
            subject: 'Welcome to My Bookshop',
            text: emailContent
        });
    } catch (error) {
        console.error('Error sending welcome email', error);
        throw error;
    }
}
const user = new User();
user.username = 'Mary';
user.email = 'olawoyinchris1998@gmail.com';
sendWelcomeEmail(user.email, user);


