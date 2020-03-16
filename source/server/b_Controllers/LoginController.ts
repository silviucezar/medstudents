import { Response } from "express";

import { TokenizedRequest } from "../e_Interfaces/tokenized.request.interface";
import { DatabaseConnection } from '../a_Classes/database/database.config';
import { Security } from '../a_Classes/security/security'


export class LoginController {

    static async run(request: TokenizedRequest, response: Response, token?: string) {

        const dbPool = DatabaseConnection.pool;
        const salt = await Security.getSalt(request.body.email);
        const pepper = Security.getPrivateKey("PEPPER");
        const password = Security.hash(request.body.password + salt + pepper);
        console.log(password)
        const sanitizedQuery = [request.body.email, password]
        dbPool.query(`SELECT * FROM users WHERE email=? AND pwd=?`, sanitizedQuery, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                response.json({
                    status: "success",
                    data: data[0],
                    token
                });
            }
        });
    }
}