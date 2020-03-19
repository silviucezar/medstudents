import { Response, NextFunction } from "express";

import { ISecurity, SecretKeyTypes } from "../../e_Interfaces/Security/security.interface";
import { TokenizedRequest } from "../../e_Interfaces/Security/tokenized.request.interface";

import * as crypto from 'crypto';
import * as JSONWebToken from 'jsonwebtoken';
import * as fs from 'fs';

export class Security implements ISecurity {

    generateRequestToken(username: string): string {
        return JSONWebToken.sign({ username }, Security.getPrivateKey('TOKEN'));
    }

    verifyRequestToken(token: string): string {
        return JSONWebToken.verify(token, Security.getPrivateKey('TOKEN')).toString();
    }

    verifyTokenMiddleware(request: TokenizedRequest, response: Response, next: NextFunction) {
        return ''
    }

    static hash(rawPass: string): string {
        const hash = crypto.createHash('sha256');
        hash.update(rawPass);
        return hash.digest('hex');
    }

    static getPrivateKey(type: keyof SecretKeyTypes): string {
        return process.env[type] || fs.readFileSync(`${__dirname}\\${type}.txt`).toString();
    }

    static get randomKey(): string {
        return crypto.randomBytes(20).toString('hex');
    }
}