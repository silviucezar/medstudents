import { Response } from "express";

import { TokenizedRequest } from "../e_Interfaces/tokenized.request.interface";
import { DatabaseConnection } from '../a_Classes/database/database.config';
import { Security } from '../a_Classes/security/security'


export class LoginController {

    static async run(request: TokenizedRequest, response: Response) {

        response.json({
            status: "success"
        })
        //     DatabaseConnection.pool.query(`INSERT INTO GuestLogs * FROM users WHERE email=? AND pwd=?`, (err, data) => {
        //         if (err) {
        //             console.log(err)
        //         } else {
        //             console.log(data)
        //             response.json({
        //                 status: "success",
        //                 data: data[0],
        //             });
        //         }
        //     });
        // }
    }
}