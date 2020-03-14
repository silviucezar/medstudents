import { Response } from "express";

import { TokenizedRequest } from "../e_Interfaces/tokenized.request.interface";
import { DatabaseConnection } from '../a_Classes/database/database.config';
import { Shield } from '../a_Classes/security/shield'


export class LoginController {

    constructor() { }

    static run(request: TokenizedRequest, response: Response, token?: string) {

        const dbPool = new DatabaseConnection().pool;

        const passDetails:PassDetails = {
            Shield.password(request.body.password),
            pepper : Shield.trigger("PEPPER");
        }
        console.log('pass',Shield.password(request.body.password));

        const sanitizedQuery = [request.body.username,request.body.password]
        dbPool.query(`SELECT * FROM users WHERE username=? AND pwd=SELECT(SHA256(?))`, sanitizedQuery, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        });
        console.log(request.token)
        console.log('token',token)
        response.end(JSON.stringify({ status: 'success' }));
    }
}