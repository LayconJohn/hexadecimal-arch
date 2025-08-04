import HttpServer from "../application/HttpServer";
import express from "express";


export default class ExpressAdapter implements HttpServer {
    app: any;

    constructor(){
        this.app = express();
    }

    async register(method: string, url: string, callBack: Function): Promise<void> {
        this.app[method](url, async (req: any, res: any) => {
            const output = await callBack(req.params, req.body);
            res.json(output)
        });
    }
    async listen(port: number): Promise<void> {
        return this.app.listen(port)
    }

}