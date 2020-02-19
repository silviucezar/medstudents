import { Application, NextFunction, Request, Response } from "express";
import { RequestsInitialization } from "./d_requestsInitialization";

export class ServedApplication extends RequestsInitialization {
    constructor(app: Application) {
        super(app);
        app.use((_request: Request, response: Response, next: NextFunction) => {
            response.header('Access-Control-Allow-Origin','http://localhost:4200');
            this.listenToGetRequests();
            this.listenToPostRequests();
            this.listenToPutRequests();
            this.listenToDeleteRequests();
            next();
        });
    }
}