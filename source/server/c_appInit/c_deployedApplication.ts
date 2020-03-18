import Express, { Application, Response, NextFunction } from "express";
import { RequestsInitialization } from "./d_requestsInitialization";
import { TokenizedRequest } from "../e_Interfaces/Security/tokenized.request.interface";

export class DeployedApplication extends RequestsInitialization {
    constructor(app: Application) {
        super(app);
        app.use(Express.static('application/client'), (_request: TokenizedRequest, response: Response, next: NextFunction) => {
            response.header('Access-Control-Allow-Origin', process.env.ORIGIN);
            next();
        });
        this.listenToGetRequests();
        this.listenToPostRequests();
        this.listenToPutRequests();
        this.listenToDeleteRequests();
    }
}