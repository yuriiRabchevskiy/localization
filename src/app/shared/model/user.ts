export interface IUser {
    name: string;
    password: string;
}

export class User implements IUser {
    name: string;
    password: string;
}