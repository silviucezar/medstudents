import { Application, NextFunction, Response } from "express";
import { RequestsInitialization } from "./d_requestsInitialization";
import { TokenizedRequest } from "../e_Interfaces/tokenized.request.interface";

export class ServedApplication extends RequestsInitialization {
    constructor(app: Application) {
        super(app);
        app.use((_request: TokenizedRequest, response: Response, next: NextFunction) => {
            response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
            next();
        });
        this.listenToGetRequests();
        this.listenToPostRequests();
        this.listenToPutRequests();
        this.listenToDeleteRequests();
    }
}