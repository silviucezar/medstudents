import { RootController } from "../b_Controllers/a_RootController";
import { ForgotPassController } from "../b_Controllers/ForgotPassController";

export enum GetEnum {
    "/",
    "/change-pass",
    "/test",
    "/root"
}

export interface GetConfig {
    controllers: GetControllers;
    routes: string[];
}

export interface GetControllers {
    root: typeof RootController
    forgotpass: typeof ForgotPassController
}