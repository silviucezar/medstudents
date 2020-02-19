import Express, { Application, Response, Request, NextFunction } from "express";
import { RequestsInitialization } from "./d_requestsInitialization";

export class DeployedApplication extends RequestsInitialization {
    constructor(app: Application) {
        super(app);
        app.use(Express.static('application/client'), (_request: Request, response: Response, next: NextFunction) => {
            response.header('Access-Control-Allow-Origin', process.env.ORIGIN);
            next();
        });
    }
}