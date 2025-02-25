import express from "express";
import CalculateInvoice from "./CalculateInvoice";
import TransactionDAODatabase from "./TransactionDAODatabase";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";
import AxiosAdapter from "./AxiosAdaper";


const app = express();

app.get("/card/:cardNumber/invoices", async (req, res) => {
    const transactionDAO = new TransactionDAODatabase();
    const httpClient = new AxiosAdapter();
    const baseUrl = "http://localhost:3001"
    const currencyGateway = new CurrencyGatewayHttp(baseUrl, httpClient);
    const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
    const total = await calculateInvoice.execute(req.params.cardNumber);
    res.json({
        total
    })
})

app.listen(3000)