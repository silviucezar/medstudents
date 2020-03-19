import { MysqlError } from "mysql";

export class Handler {
    constructor() { }

    async handle<T>(handler: string, data: any | MysqlError, callback: () => void): Promise<T> {
        // if (typeof data === 'object') {
        //     this.retry(callback);
        //     return 'dsa';
        // } else {
            return await this.do<T>(handler, data);
        // }
    }

    do<T>(handler: string, data: any): Promise<T> {
        return new Promise(resolve => {
            import(`../Handlers/${handler}Handler`).then(imported => {
                console.log(imported)
                resolve(imported);
            });
        });
    }

    retry(callback: () => void) {

    }
}