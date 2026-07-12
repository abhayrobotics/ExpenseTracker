const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);


app.use(express.json())

app.get("/", (req, res) => {
  res.send("Home page")
})

app.get("/expenses", async (req, res) => {
  const expenses = await prisma.expense.findMany();
  res.json(expenses);
});

app.post("/expenses", async (req, res) => {
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

app.delete("/expenses/:id", async (req, res) => {
  const id = Number(req.params.id)
  const newList = await prisma.expense.delete({ where: { id } })
  console.log(newList)
  res.status(201).json(newList)
})

app.patch("/expenses/:updateId", async (req, res) => {
  const updateId = Number(req.params.updateId)
  // const { category, amount, subcategory, notes, date } = req.body;

  try{
const updatedList = await prisma.expense.update({
    where: { id: updateId },
    data: req.body
  })
  }
  catch(e){
    console.log(e)
  }
  
  res.status(200).json(updatedList)
})


app.listen(3000, () => {
  console.log("server is running")
})