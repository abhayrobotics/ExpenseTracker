const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

// JWT middleware
const authenticateUser = (req, res, next) => {
  try {
    // get authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Not authorized user" });
    }
    const token = authHeader.split(" ")[1];

    // verify jwt
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // modify request with jwt payload
    req.user = payload;
    next();
    //
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

app.get("/", (req, res) => {
  res.send("Home page");
});

// read expenses
app.get("/expenses", authenticateUser, async (req, res) => {
  try {
    const expenses = await prisma.expense.findMany({
      where: {
        userId: req.user.userId,
      },
    });
    res.json(expenses);
  } catch (e) {
    console.error(e);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// signup
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("done")
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
       
      },
    });
    res.status(200).json({
      message: "user Created successfully ",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// Login
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    // verify email and password
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // generate JWT now
    const payload = {
      userId: user.id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    
    

    res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// create a expense
app.post("/expenses", authenticateUser, async (req, res) => {
  const { category, amount, subcategory, notes, date } = req.body;

  const newExpense = await prisma.expense.create({
    data: {
      category,
      amount,
      subcategory,
      notes,
      date: new Date(date),
      userId: req.user.userId,
    },
  });
  res.status(201).json(newExpense);
});

// delete a expense
app.delete("/expenses/:id", authenticateUser, async (req, res) => {
  const id = Number(req.params.id);

  const newList = await prisma.expense.delete({ where: { id } });
  console.log(newList);
  res.status(201).json(newList);
});

// update a expense
app.patch("/expenses/:updateId", async (req, res) => {
  const updateId = Number(req.params.updateId);
  const { category, amount, subcategory, notes, date } = req.body;
  console.log(req.body);
  try {
    const updatedList = await prisma.expense.update({
      where: { id: updateId },
      data: {
        amount,
        category,
        subcategory,
        notes,
        date: new Date(date),
      },
    });
    res.status(200).json(updatedList);
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
