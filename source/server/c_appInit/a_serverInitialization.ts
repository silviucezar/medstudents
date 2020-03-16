import Express, { Application } from "express";
import { DeployedApplication } from './c_deployedApplication'
import { ServedApplication } from './b_servedApplication'
import { Security } from '../a_Classes/security/security';
import * as bodyParser from 'body-parser';
import session from 'express-session';



interface IExpressListener {
    listen(): Application;
}

interface ApplicationType {
    Deployed: typeof DeployedApplication;
    Served: typeof ServedApplication;
}

export class ExpressListener implements IExpressListener {

    private initType: keyof ApplicationType = process.env.INITTYPE as 'Deployed' || 'Served';
    private app: Application = Express();
    private appType: ApplicationType = {
        Deployed: DeployedApplication,
        Served: ServedApplication
    }
    constructor() { }

    listen(): Application {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(session({
            secret: Security.getPrivateKey('SESSION'),
            resave: true,
            saveUninitialized: false,
            cookie: {
                maxAge: 900000
            }
        }));
        this.app.listen(process.env.PORT || 8080, () => new (this.appType[this.initType])(this.app));
        return this.app;
    }
}