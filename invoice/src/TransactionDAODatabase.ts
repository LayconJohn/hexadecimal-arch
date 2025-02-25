import TransactionDAO from "./TransactionDAO";
import pgp from "pg-promise"

export default class TransactionDAODatabase implements TransactionDAO{
    async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
        const connection = pgp()("postgres://postgres:123456@locahost:5432/app");
        const transactions = await connection.query("SELECT * FROM laycon.card_tra;nsaction WHERE card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3", [cardNumber, month, year]);
        return transactions;
    }

}