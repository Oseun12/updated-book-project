import bcrypt  from 'bcryptjs';
import { User } from '../persistence/entity/user';
import { UserRequest } from '../model/request/user.request';
import { Request, Response } from 'express';
import service from '../service/services';
import { sendWelcomeEmail } from '../service/auth.service';



declare module 'express-session' {
    interface Session {
        user?: any; // Modify the type of 'user' as per your user model
    }
}


export async function getLogin(req: Request, res: Response) {
        res.send('login');
}

export async function postLogin(req: Request, res: Response) {
        const { username, email, password } = req.body;
        try {
            if (!username || !email || !password) {
                return res.status(400).json({ message: 'Username, email, and password required'});
            }
            // Find user by email or username
            const user = await service.userService.getUserByUsernameOrEmail(username, email);
            console.log('user: ', user.get());
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            //After successful Login, generate token and set session
            const token = await service.authService.generateToken(username, email,password);
            req.session.user = user.username;
            res.json({ data: { access_token: token.access_token, expires_in: token.expires_in }, message: 'Login successful', status: 200 });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
        //const user = await User.findOne({  });

        
}

export async function getSignup(req: Request, res: Response) {
        res.send('signup');
}

export async function postSignup(req: Request, res: Response) {
        try {
            // create the user
            await service.userService.createUser(req.body as UserRequest)
            //Send Email
            await sendWelcomeEmail(req.body.email, new User);

            res.json({ message: 'User created successfully' });
        } catch (error) {
            console.error('Error creating User:', error);
            res.status(500).json({ message: 'Internal Server Error!!!' });
        }
}

export async function logout(req: Request, res: Response) {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error logging out:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.json({ message: 'Logout successfully' });
        }
    })
}

