import { TokenizedRequest } from "./tokenized.request.interface";
import { Response, NextFunction } from "express";

export interface IShield {
    generateRequestToken: (username: string) => string
    verifyRequestToken: (token: string) => string;
    verifyTokenMiddleware: (request: TokenizedRequest, response: Response, next: NextFunction) => string;
}

export interface SecretKeyTypes {
    SESSION: string;
    TOKEN: string;
    PEPPER: string;
}