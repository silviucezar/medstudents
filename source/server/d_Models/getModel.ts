import { RootController } from "../b_Controllers/a_RootController";
import { LoginController } from "../b_Controllers/LoginController";
import { ForgotPassController } from "../b_Controllers/ForgotPassController";

export enum GetEnum {
    "/",
    "/login",
    "/change-pass"
}

export interface IRequestsControllers {
    get:IGetControllers;
}

export interface IGetControllers {
    root: typeof RootController
    login: typeof LoginController,
    forgotpass: typeof ForgotPassController
}