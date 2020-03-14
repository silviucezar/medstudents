import { Response, NextFunction } from "express";

import { IShield, SecretKeyTypes } from "../../e_Interfaces/shield.interface";
import { TokenizedRequest } from "../../e_Interfaces/tokenized.request.interface";

import * as crypto from 'crypto';
import * as JSONWebToken from 'jsonwebtoken';
import * as fs from 'fs';

export class Shield implements IShield {

    static password(password: string): PassDetails {
        const hash = crypto.createHash('sha256');
        hash.update(Shield.random + password);
        return {
            salt : '',
            password : hash.digest('hex')
        };
    }

    static trigger(type: keyof SecretKeyTypes): string {
        return process.env[type] || fs.readFileSync(`${__dirname}\\${type}.txt`).toString();
    }

    private static get random(): string {
        return crypto.randomBytes(48).toString('hex') + Shield.trigger('PEPPER');
    }

    generateRequestToken(username: string): string {
        return JSONWebToken.sign({ username }, Shield.trigger('TOKEN'));
    }

    verifyRequestToken(token: string): string {
        return JSONWebToken.verify(token, Shield.trigger('TOKEN')).toString();
    }

    verifyTokenMiddleware(request: TokenizedRequest, response: Response, next: NextFunction) {
        return ''
    }
}