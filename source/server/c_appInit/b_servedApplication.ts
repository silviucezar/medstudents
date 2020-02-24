import { Application, NextFunction, Request, Response } from "express";
import { RequestsInitialization } from "./d_requestsInitialization";
import * as bodyParser from 'body-parser';

export class ServedApplication extends RequestsInitialization {
    constructor(app: Application) {
        super(app);
        app.use(bodyParser.urlencoded({ extended: true }), (_request: Request, response: Response, next: NextFunction) => {
            response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
            next();
        });
        this.listenToGetRequests();
        this.listenToPostRequests();
        this.listenToPutRequests();
        this.listenToDeleteRequests();
    }
}