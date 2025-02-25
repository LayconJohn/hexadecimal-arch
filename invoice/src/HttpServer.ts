export default interface HttpServer {
    register(method: string, url: string, callBack: Function): void;
    listen(port: number): void;
} 