import { DatabaseConnection } from '../a_Classes/database/database.config';
import { Security } from '../a_Classes/security/security';

import { Salt } from '../a_Classes/salt';
import { Handler } from '../Handlers/MainHandler';
import { LoginParams } from '../e_Interfaces/Login/params';
import { LoginStatus } from '../e_Interfaces/Login/status';

export class LoginModel {

    private handler = new Handler();
    private pool = DatabaseConnection.pool;

    constructor(private loginParams: LoginParams) { }

    async login() {
        return await this[`with${this.loginParams.loginType}` as 'withPass' | 'withId'];
    }

    private async withPass(): Promise<LoginStatus> {
        const salt = await Salt.get(await this.userid);
        const pepper = Security.getPrivateKey("PEPPER");
        const password = Security.hash(this.loginParams.password + salt + pepper);
        return new Promise((resolve, reject) => {
            const query = () => {
                DatabaseConnection.pool.query(
                    `SELECT * FROM users WHERE email=? AND pwd=?`,
                    [this.loginParams.email, password], async (error, data) => {
                        resolve(await this.handler.handle<LoginStatus>('Login', data || error, query));
                    });
            }
        });
    }

    private withId(): Promise<LoginStatus> {
        return new Promise(resolve => {

        });
    }

    private get userid(): Promise<string> {
        return new Promise((resolve, reject) => {
            DatabaseConnection.pool.query('SELECT userid FROM users WHERE email=?', [this.loginParams.email], (error, data) => {
                if (error) reject(error); else resolve(data[0].userid);
            });
        });
    }
}