import { Response } from "express";

import { TokenizedRequest } from "../e_Interfaces/Security/tokenized.request.interface";
import { DatabaseConnection } from '../a_Classes/database/database.config';
import { Security } from '../a_Classes/security/security'
import { LoginModel } from "../d_Models/LoginModel";

export class LoginController {

    static async run(request: TokenizedRequest, response: Response, token?: string) {
        const model = new LoginModel(request.body);
        const jsonToSend = await model.login();
        response.json(jsonToSend);
    }
}