import { DatabaseConnection } from '../a_Classes/database/database.config';
import { Security } from '../a_Classes/security/security';

export class LoginModel {

    constructor(private body:any) {

    }

    login(loginParams: LoginParams) {


        withPass = 

    }


    loginWith() {

    }

    private pass() {
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

    private id() {

    }
}