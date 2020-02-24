import { Application, Request, Response } from "express";
import { RootController } from "../b_Controllers/a_RootController";
import { LoginController } from "../b_Controllers/LoginController";
import { ForgotPassController } from "../b_Controllers/ForgotPassController";
import { GetEnum, GetControllers } from "../d_Models/get.model.ts";
import { PostEnum, PostControllers } from "../d_Models/post.model";
import { RequestsControllers } from './../d_Models/request.controllers.model'

interface IRequestHandlerFunctionality {
    listenToGetRequests(): void;
    listenToPostRequests(): void;
    listenToPutRequests(): void;
    listenToDeleteRequests(): void;
}

export class RequestsInitialization implements IRequestHandlerFunctionality {

    private requestControllers: RequestsControllers = {
        get: {
            controllers: {
                root: RootController,
                forgotpass: ForgotPassController
            },
            routes: Object.keys(GetEnum)
        },
        post: {
            controllers: {
                login: LoginController
            },
            routes: Object.keys(PostEnum)
        }
    }

    constructor(protected app: Application) { }

    listenToGetRequests() {
        console.log(this.requestControllers.get.routes)
        this.app.get(this.requestControllers.get.routes, (request: Request, response:Response) => {
            this.requestControllers.get.controllers[request.url.replace("/", "") as keyof GetControllers].run(request, response);
        });
    }

    listenToPostRequests() {
        this.app.post(this.requestControllers.post.routes, (request: Request, response: Response) => {
            console.log(this.requestControllers.post.routes)
            this.requestControllers.post.controllers[request.url.replace("/", "") as keyof PostControllers].run(request, response);
        });
    }

    listenToPutRequests() { };
    listenToDeleteRequests() { };

}