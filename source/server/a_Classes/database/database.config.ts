import { PoolConfig, Pool, createPool } from 'mysql';
import * as fs from 'fs';

export class DatabaseConnection {

    public readonly pool: Pool = createPool(this.poolConfiguration);

    constructor() { }

    private get poolConfiguration(): PoolConfig {
        return JSON.parse(process.env.POOLCONFIG?.toString() || fs.readFileSync(`${__dirname}\\dbconfig.json`).toString());
    }
}