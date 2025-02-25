
import TransactionDAO from "./TransactionDAO";
import CurrencyGateway from "./CurrencyGateway";
import Invoice from "./Invoice";
import Clock from "./Clock";

export default class CalculateInvoice {
    constructor(
        readonly transactionDAO: TransactionDAO,
        readonly currencyGateway: CurrencyGateway,
        readonly clock: Clock
    ){}

    async execute(cardNumber: string){
        const today = this.clock.getToday();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const currencies = await this.currencyGateway.getCurrencies();
        const transactions = await this.transactionDAO.getTransactions(cardNumber, month, year);
        const invoice = new Invoice(transactions, currencies)
        const total = invoice.getTotal()
        return {total};
    }
}