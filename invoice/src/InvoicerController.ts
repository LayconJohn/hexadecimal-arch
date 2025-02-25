import CalculateInvoice from "./CalculateInvoice";
import express from "express";


export default class InvoiceController {
    constructor(
        readonly calculateInvoice: CalculateInvoice
    ){
        const app = express();
        app.get("/card/:cardNumber/invoices", async (req, res) => {
            const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
            const total = await calculateInvoice.execute(req.params.cardNumber);
            res.json({
                total
            })
        });

        app.listen(3000);
    }
}