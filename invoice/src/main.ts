import express from "express";
import pgp from "pg-promise"

const app = express();

app.get("/card/:cardNumber/invoices", async (req, res) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const connection = pgp()("postgres://postgres:123456@locahost:5432/app");
    const transactions = await connection,query("SELECT * FROM laycon.card_tra;nsaction WHERE card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3", [req.params.card_number, month, year]);
    let total = 0;
    for (const transaction of transactions) {
        total += parseFloat(transaction.amount)
    }
    res.json({
        total
    })
})

app.listen(3000)