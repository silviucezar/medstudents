import { Request, Response } from "express";

export class RootController {
    constructor() { }

    static run(request: Request, response: Response) {
        console.log(response)
        response.end(JSON.stringify({ status: 'success' }));
    }
}