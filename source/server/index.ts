import Express, { Application, Request, Response, NextFunction } from 'express';
import { ExpressRequestsHandler } from './c_appInit/a_serverInitialization';
import { SecureContextOptions } from 'tls';
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';

export class ExpressApp {

    static create() {
        const appListenerStart = new ExpressRequestsHandler().startListening;
        try {
            const config: SecureContextOptions = {
                cert: fs.readFileSync((process.env.CERT!), 'utf8'),
                key: fs.readFileSync((process.env.KEY!), 'utf8')
            };
            https.createServer(config, appListenerStart());
        } catch (e) {
            http.createServer(appListenerStart());
        }
    }
}

ExpressApp.create();

