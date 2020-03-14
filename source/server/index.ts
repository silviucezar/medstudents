import { ExpressListener } from './c_appInit/a_serverInitialization';
import { SecureContextOptions } from 'tls';
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';

class ExpressApp {

    static create() {
        const listener = new ExpressListener();
        try {
            const config: SecureContextOptions = {
                cert: fs.readFileSync((process.env.CERT!), 'utf8'),
                key: fs.readFileSync((process.env.KEY!), 'utf8')
            };
            https.createServer(config, listener.listen());
        } catch (e) {
            http.createServer(listener.listen());
        }
    }
}

ExpressApp.create();

