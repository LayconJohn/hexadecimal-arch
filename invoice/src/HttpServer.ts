export default interface HttpServer {
    register(method: string, url: string, callBack: Function): Promise<void>;
    listen(port: number): Promise<void>;
} 