import { Request, Response } from "express";


export class LoginController {
    constructor() { }

    static run(request: Request, response: Response) {
        console.log(request.body)
        response.end(JSON.stringify({ status: 'success' }));
    }
}