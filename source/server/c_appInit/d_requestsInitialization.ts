import { Application, Response, NextFunction } from "express";
import { RootController } from "../b_Controllers/a_RootController";
import { LoginController } from "../b_Controllers/LoginController";
import { ForgotPassController } from "../b_Controllers/ForgotPassController";
import { GetEnum, GetControllers } from "../d_Models/get.model.ts";
import { PostEnum, PostControllers } from "../d_Models/post.model";
import { RequestsControllers } from './../d_Models/request.controllers.model'
import * as JSONWebToken from 'jsonwebtoken';
import { TokenizedRequest } from "../e_Interfaces/tokenized.request.interface";
import { Security } from "../a_Classes/security/security";

interface IRequestHandlerFunctionality {
    listenToGetRequests(): void;
    listenToPostRequests(): void;
    listenToPutRequests(): void;
    listenToDeleteRequests(): void;
}

export class RequestsInitialization implements IRequestHandlerFunctionality {

    private security = new Security();

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
        this.app.get(this.requestControllers.get.routes, (request: TokenizedRequest, response: Response) => {
            this.requestControllers.get.controllers[request.url.replace("/", "") as keyof GetControllers].run(request, response);
        });
    }

    listenToPostRequests() {
        this.app.post(this.requestControllers.post.routes, this.verifyToken, (request: TokenizedRequest, response: Response) => {
            switch (true) {
                case request.body.username === 'Guest' && request.url === '/login':
                    response.json({ loggedOut: true });
                    break;
                case request.body.username !== 'Guest' && request.url === '/login':
                    const token = this.security.generateRequestToken(request.body.username);
                    this.requestControllers.post.controllers[request.url.replace("/", "") as keyof PostControllers].run(request, response, token);
                    break;
                default:
                    try {
                        const _token = this.security.verifyRequestToken(request.token as string);
                        console.log(_token)
                        this.requestControllers.post.controllers[request.url.replace("/", "") as keyof PostControllers].run(request, response);
                    } finally {
                        response.sendStatus(403);
                    }
            }
        });
    }

    listenToPutRequests() { };
    listenToDeleteRequests() { };

    private verifyToken(request: TokenizedRequest, response: Response, next: NextFunction) {
        if (request.url !== '/login') {
            if (typeof request.headers.authorization === 'undefined') return response.sendStatus(403);
            request.token = request.headers.authorization?.replace(/bearer\s/gi, '')
            next();
        } else {
            next();
        }
    }
}