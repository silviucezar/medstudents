import { LoginController } from "../b_Controllers/LoginController";

export enum PostEnum {
    "/login",
}

export interface PostConfig {
    controllers: PostControllers;
    routes: string[];
}

export interface PostControllers {
    login: typeof LoginController
}