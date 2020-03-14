import { Response } from "express";
import { TokenizedRequest } from "../e_Interfaces/tokenized.request.interface";

export class RootController {
    constructor() { }

    static run(request: TokenizedRequest, response: Response) {
        console.log(response)
        response.end(JSON.stringify({ status: 'success' }));
    }
}