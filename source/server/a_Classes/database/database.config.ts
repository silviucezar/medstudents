import { PoolConfig, Pool, createPool } from 'mysql';
import * as fs from 'fs';

export class DatabaseConnection {

    private static get poolConfiguration(): PoolConfig {
        return JSON.parse(process.env.POOLCONFIG?.toString() || fs.readFileSync(`${__dirname}\\dbconfig.json`).toString());
    }

    public static readonly  pool: Pool = createPool(DatabaseConnection.poolConfiguration);
}