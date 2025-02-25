import CalculateInvoice from "./CalculateInvoice";
import HttpServer from "./HttpServer";


export default class InvoiceController {
    constructor(
        readonly httpServer: HttpServer,
        readonly calculateInvoice: CalculateInvoice
    ){
        httpServer.register("get", "/card/:cardNumber/invoices", async (params: any, body: any) => {
            const total = await calculateInvoice.execute(params.cardNumber);
            return total;
        });
    }
}