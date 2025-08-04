import Connection from "../application/Connection";
import pgp from "pg-promise"

export default class PgPromiseAdapter implements Connection {
    connection: any; 

    constructor(){
        this.connection = pgp()("postgres://postgres:123456@locahost:5432/app");
    }

    async query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }
    async close(): Promise<any> {
        this.connection.$pool.end()
    }
}