import CalculateInvoice from "../src/CalculateInvoice";
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
    const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
    const total = await calculateInvoice.execute("1234");
    expect(total).toBe(2300);
})