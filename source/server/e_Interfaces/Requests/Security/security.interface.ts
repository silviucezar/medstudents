import { TokenizedRequest } from "../../Security/tokenized.request.interface";
import { Response, NextFunction } from "express";

export interface ISecurity {
    generateRequestToken: (username: string) => string
    verifyRequestToken: (token: string) => string;
    verifyTokenMiddleware: (request: TokenizedRequest, response: Response, next: NextFunction) => string;
}

export interface SecretKeyTypes {
    SESSION: string;
    TOKEN: string;
    PEPPER: string;
}