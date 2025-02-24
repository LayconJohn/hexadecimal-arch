import express from "express";
import pgp from "pg-promise"

const app = express();

app.get("/card/:cardNumber/invoices", async (req, res) => {
    const connection = pgp()("postgres://postgres:123456@locahost:5432/app");
    const transactions = await connection,query("SELECT * FROM laycon.card_tra;nsaction WHERE card_number = $1", [req.params.card_number]);
    let total = 0;
    for (const transaction of transactions) {
        total += parseFloat(transaction.amount)
    }
    res.json({
        total
    })
})

app.listen(3000)