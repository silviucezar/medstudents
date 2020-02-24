import Express, { Application } from "express";
import { DeployedApplication } from './c_deployedApplication'
import { ServedApplication } from './b_servedApplication'


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
        this.app.listen(process.env.PORT || 8080, () => new (this.appType[this.initType])(this.app));
        return this.app;
    }
}