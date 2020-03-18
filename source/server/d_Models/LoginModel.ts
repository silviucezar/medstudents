import { DatabaseConnection } from '../a_Classes/database/database.config';
import { Security } from '../a_Classes/security/security'

export class LoginModel {

    login(bodyRequest: any) {

        withPass = 

    }

    private getSalt(email: string): Promise<string> {
        return new Promise((resolve, reject) => {
            DatabaseConnection.pool.query(`SELECT salt from salts WHERE email=?`, [email], (error, data) => {
                if (error) reject(error); else resolve(data[0].salt);
            });
        });
    }

    private setSalt(email: string): Promise<any> {
        return new Promise((resolve, reject) => {
            function insertSalt() {
                DatabaseConnection.pool.query(`INSERT INTO salts (salt,email) VALUES (?,?)`, [Security.randomKey, email], (error, data) => {
                    if (error) reject(error); else resolve(data);
                });
            }
            try { insertSalt(); } catch (e) { insertSalt(); }
        });
    }

    private withPass() {
        const dbPool = DatabaseConnection.pool;
        const salt = await this.getSalt(bodyRequest.identificationKey);
        const pepper = Security.getPrivateKey("PEPPER");
        const password = Security.hash(request.body.password + salt + pepper);
        console.log(password)
        const sanitizedQuery = [request.body.email, password]
        dbPool.query(`SELECT * FROM users WHERE email=? AND pwd=?`, sanitizedQuery, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                const jsonToSend = {
                    status: "success",
                    data: data[0]
                }
                Object.defineProperty(jsonToSend.data, "token", { value: token });
                response.json(jsonToSend);
            }
        });
    }

    private withId() {

    }
}