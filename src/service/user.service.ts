import { AppUtils } from "../core/utils/app.utils";
import { UserRequest } from "../model/request/user.request";
import { User } from "../persistence/entity/user";

export async function createUser(request: UserRequest): Promise<User> {
    try {
        const user = await User.findOne({ where: { username: request.username } });

        if (user) {
            console.log("User already exists");
            throw new Error("User already exists");
        }

        // Hash the password
        const hashedPassword = AppUtils.generateHashPassword(request.password);
        if (!hashedPassword) {
            console.error("Error hashing password");
            throw new Error("Error hashing password");
        }

        // Create a new user
        const newUser = new User({
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
            username: request.username,
            password: hashedPassword,
            role: request.role,
            createdAt: new Date(),
            createdBy: "system"
        });

        // Save the user
        const savedUser = await newUser.save();

        console.log("User created successfully");
        return savedUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Internal server error");
    }
}

export async function updateUser(request: UserRequest, id: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        User.findByPk(id).then(async(user) => {
            if (!user) {
                console.log("User not found");
                throw Error("User not found");
            }
            // Hash the password
            let hashedPassword = '';
            if (request.password) {
                hashedPassword = await AppUtils.generateHashPassword(request.password);
                if (!hashedPassword) {
                    console.error("Error hashing password");
                    reject("Error hashing password");
                }
            }
            // Update the user
            if (request.firstName) user.firstName = request.firstName;
            if (request.lastName) user.lastName = request.lastName;
            if (request.email) user.email = request.email;
            if (request.username) user.username = request.username;
            if (request.password) user.password = hashedPassword;
            if (request.role) user.role = request.role;
            user.updatedAt = new Date();
            user.updatedBy = "system";
            // Save the user
            user.save().then((user) => {
                console.log("User updated successfully");
                resolve(user)
                return user;
            }).catch((error) => {
                console.error("Error updating user:", error);
                reject(null);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function deleteUser(id: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        User.findByPk(id).then((user) => {
            if (!user) {
                console.log("User not found");
                throw Error("User not found");
            }
            // Delete the user
            user.destroy().then(() => {
                console.log("User deleted successfully");
                resolve(true)
                return user;
            }).catch((error) => {
                console.error("Error deleting user:", error);
                reject(false);
            });
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function getUserById(id: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        User.findByPk(id).then((user) => {
            if (!user) {
                console.log("User not found");
                throw Error("User not found");
            }
            console.log("User found");
            resolve(user)
            return user;
        }).catch((error) => {
            reject(error);
            throw new Error('user not find')
        });
    });
}

export async function getUserByUsernameOrEmail(username: string, email: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        User.findOne({
            where: { username, email }
        }).then((user) => {
            if (!user) {
                console.log("User not found");
                throw Error("User not found");
            }
            resolve(user)
            return user;
        }).catch((error) => {
            reject(error);
            throw new Error('user not find')
        });
    });
}

export async function getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
        User.findAll().then((users) => {
            console.log("Users found");
            for (const u of users) {
                delete u.get().password
            }
            resolve(users)
            return users;
        }).catch((error) => {
            reject(error);
        });
    });
}

