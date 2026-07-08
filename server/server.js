const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();


app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home page")
})

app.get("/expenses", async (req, res) => {
    const expenses = await prisma.expense.findMany();
    res.json(expenses);
});

app.post("/expenses",async (req, res) => {
   const { category, amount, subcategory, notes, date } = req.body;

  const newExpense = await prisma.expense.create({
    data: {
      category,
      amount,
      subcategory,
      notes,
      date: new Date(date),
    },
  });
    res.status(201).json(newExpense);
})


app.listen(3000, () => {
    console.log("server is running")
})