import { Response, NextFunction } from "express";

import { ISecurity, SecretKeyTypes } from "../../e_Interfaces/security.interface";
import { TokenizedRequest } from "../../e_Interfaces/tokenized.request.interface";

import * as crypto from 'crypto';
import * as JSONWebToken from 'jsonwebtoken';
import * as fs from 'fs';
import { DatabaseConnection } from "../database/database.config";

export class Security implements ISecurity {



    static hash(rawPass: string): string {
        const hash = crypto.createHash('sha256');
        hash.update(rawPass);
        return hash.digest('hex');
    }

    static getSalt(email: string): Promise<string> {
        return new Promise((resolve, reject) => {
            DatabaseConnection.pool.query(`SELECT salt from salts WHERE email=?`, [email], (error, data) => {
                if (error) reject(error); else resolve(data[0].salt);
            });
        });
    }

    static setSalt(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            function insertSalt() {
                DatabaseConnection.pool.query(`INSERT INTO salts (salt,email) VALUES (?,?)`, [Security.randomKey, email], (error, data) => {
                    if (error) reject(error); else resolve(data);
                });
            }
            try { insertSalt(); } catch (e) { insertSalt(); }
        });
    }

    static getPrivateKey(type: keyof SecretKeyTypes): string {
        return process.env[type] || fs.readFileSync(`${__dirname}\\${type}.txt`).toString();
    }

    private static get randomKey(): string {
        return crypto.randomBytes(20).toString('hex');
    }

    generateRequestToken(username: string): string {
        return JSONWebToken.sign({ username }, Security.getPrivateKey('TOKEN'));
    }

    verifyRequestToken(token: string): string {
        return JSONWebToken.verify(token, Security.getPrivateKey('TOKEN')).toString();
    }

    verifyTokenMiddleware(request: TokenizedRequest, response: Response, next: NextFunction) {
        return ''
    }
}