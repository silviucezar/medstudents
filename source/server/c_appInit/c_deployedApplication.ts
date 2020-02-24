import Express, { Application, Response, Request, NextFunction } from "express";
import * as bodyParser from 'body-parser';
import { RequestsInitialization } from "./d_requestsInitialization";

export class DeployedApplication extends RequestsInitialization {
    constructor(app: Application) {
        super(app);
        app.use(Express.static('application/client'), bodyParser.urlencoded({ extended: true }), (_request: Request, response: Response, next: NextFunction) => {
            response.header('Access-Control-Allow-Origin', process.env.ORIGIN);
            next();
        });
        this.listenToGetRequests();
        this.listenToPostRequests();
        this.listenToPutRequests();
        this.listenToDeleteRequests();
    }
}