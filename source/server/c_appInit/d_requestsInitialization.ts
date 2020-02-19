import { Application, Request, Response } from "express";
import { IRequestsControllers, IGetControllers, GetEnum } from "../d_Models/getModel";
import { RootController } from "../b_Controllers/a_RootController";
import { LoginController } from "../b_Controllers/LoginController";
import { ForgotPassController } from "../b_Controllers/ForgotPassController";


interface IRequestHandlerFunctionality {
    listenToGetRequests(): void;
    listenToPostRequests(): void;
    listenToPutRequests(): void;
    listenToDeleteRequests(): void;
}

export class RequestsInitialization implements IRequestHandlerFunctionality {

    private requestControllers: IRequestsControllers = {
        get: {
            root: RootController,
            login: LoginController,
            forgotpass: ForgotPassController
        }

    }


    constructor(private app: Application) { }

    listenToGetRequests() {
        const getRoutes = Object.keys(GetEnum);
        this.app.get(getRoutes, (request: Request, response: Response) => this.requestControllers.get[request.url as keyof IGetControllers].run());
    }

    listenToPostRequests() {

    }

    listenToPutRequests() { };
    listenToDeleteRequests() { };

}