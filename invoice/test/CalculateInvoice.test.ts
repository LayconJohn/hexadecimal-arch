import CalculateInvoice from "../src/CalculateInvoice";
import Clock from "../src/Clock";
import CurrencyGateway from "../src/CurrencyGateway";
import TransactionDAO from "../src/TransactionDAO";

test("Deve calcular a fatura", async () => {
    const transactionDAO: TransactionDAO = {
        async getTransactions(cardNumber, month, year): Promise<any> {
            return [
                { currency: "BRL", amount: 100 },
                { currency: "BRL", amount: 1000 },
                { currency: "USD", amount: 600 },
            ];
        }
    };
    const currencyGateway: CurrencyGateway = {
        async getCurrencies(): Promise<any> {
            return {
                usd: 2
            }
        }
    }
    const clock: Clock = {
        getToday() {
            return new Date("2022-01-01T10:00:00");
        }
    }
    const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway, clock);
    const output = await calculateInvoice.execute("1234");
    expect(output.total).toBe(2300);
})