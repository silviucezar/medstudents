import { Response } from 'express';

import { TokenizedRequest } from '../e_Interfaces/Security/tokenized.request.interface';
import { LoginModel } from '../d_Models/LoginModel';

import {LoginParams} from '../e_Interfaces/Login/params';

export class LoginController {

    static async run(request: TokenizedRequest, response: Response, token?: string) {
        const loginParams:LoginParams = request.body;
        Object.defineProperty(loginParams,'loginType',{
            value : loginParams.hasOwnProperty('userid') ? 'id' : 'pass'
        });
        const model = new LoginModel(loginParams)
        const jsonToSend = await model.login();
        response.json(jsonToSend);
    }
}