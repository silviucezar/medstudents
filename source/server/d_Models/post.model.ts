import { LoginController } from "../b_Controllers/LoginController";

export const PostRoutes = ['/login','/guest-visit'];

export interface PostConfig {
    controllers: PostControllers;
    routes: string[];
}

export interface PostControllers {
    login: typeof LoginController
}