import CalculateInvoice from "./application/usecase/CalculateInvoice";
import TransactionDAODatabase from "./domain/TransactionDAODatabase";
import CurrencyGatewayHttp from "./infra/CurrencyGatewayHttp";
import AxiosAdapter from "./infra/AxiosAdaper";
import PgPromiseAdapter from "./infra/PgPromiseAdapter";
import InvoiceController from "./infra/InvoicerController";
import ExpressAdapter from "./infra/ExpressAdapter";
import RealClock from "./infra/RealClock";

const clock = new RealClock();
const connection = new PgPromiseAdapter()
const transactionDAO = new TransactionDAODatabase(connection);
const httpClient = new AxiosAdapter();
const baseUrl = "http://localhost:3001"
const currencyGateway = new CurrencyGatewayHttp(baseUrl, httpClient);
const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway, clock);
const httpServer = new ExpressAdapter()
new InvoiceController(httpServer, calculateInvoice)
httpServer.listen(3000)



