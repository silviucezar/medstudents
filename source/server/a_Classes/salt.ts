import { DatabaseConnection } from "./database/database.config";
import { Security } from './security/security';

export class Salt {

    constructor() { }

    static get(userid: string): Promise<string> {
        return new Promise((resolve, reject) => {
            DatabaseConnection.pool.query(`SELECT salt from salts WHERE userid=?`, [userid], (error, data) => {
                if (error) reject(error); else resolve(data[0].salt);
            });
        });
    }

    static set(userid: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const insertSalt = () => {
                DatabaseConnection.pool.query(`INSERT INTO salts (salt,userid) VALUES (?,?)`, [Security.randomKey, userid], (error, data) => {
                    if (error) reject(error); else resolve(data);
                });
            }
            try { insertSalt(); } catch (e) { insertSalt(); }
        });
    }
}