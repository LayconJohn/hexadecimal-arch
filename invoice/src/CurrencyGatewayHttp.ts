import CurrencyGateway from "./CurrencyGateway";
import HttpClient from "./HttpClient"
import axios from "axios";

export default class CurrencyGatewayHttp implements CurrencyGateway {

    constructor(
        readonly baseUrl: string,
        readonly httpClient: HttpClient
    ){}

    async getCurrencies(): Promise<any> {
        // const response = await axios.get(`${this.baseUrl}/currencies`);
        const currencies = await this.httpClient.get(`${this.baseUrl}/currencies`)
        return currencies;
    }
}