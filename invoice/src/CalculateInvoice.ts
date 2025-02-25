import pgp from "pg-promise"
import axios from "axios";
import TransactionDAO from "./TransactionDAO";

export default class CalculateInvoice {
    constructor(
        readonly transactionDAO: TransactionDAO
    ){}

    async execute(cardNumber: string){
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const response = await axios.get("http://localhost:3001/currencies");
        const currencies = response.data;

        const transactions = await this.transactionDAO.getTransactions(cardNumber, month, year);
        // const connection = pgp()("postgres://postgres:123456@locahost:5432/app");
        // const transactions = await connection.query("SELECT * FROM laycon.card_tra;nsaction WHERE card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3", [cardNumber, month, year]);
        let total = 0;
        for (const transaction of transactions) {
            if(transaction.currency === "BRL") total += parseFloat(transaction.amount);
            if(transaction.currency === "USD") total += parseFloat(transaction.amount) * currencies.usd;
            
        }
        return total;
    }
}