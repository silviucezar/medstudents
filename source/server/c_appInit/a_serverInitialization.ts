import Express, { Application } from "express";
import { DeployedApplication } from './c_deployedApplication'
import { ServedApplication } from './b_servedApplication'


interface IRequestHandler {
    startListening(): Application;
}

interface ApplicationType {
    Deployed: DeployedApplication
    Served: ServedApplication
}

export class ExpressRequestsHandler implements IRequestHandler {

    private initType: keyof ApplicationType = process.env.INITTYPE as 'Deployed' || 'Served';
    private app: Application = Express();
    private appType: ApplicationType = {
        Deployed: new DeployedApplication(this.app),
        Served: new ServedApplication(this.app)
    }

    startListening(): Application {
        this.app.listen(process.env.PORT || 8080, () => this.appType[this.initType]);
        return this.app;
    }
}