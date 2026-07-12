
# 💰 Expense Tracker

A full-stack Expense Tracker application built with **React, Express.js, Prisma ORM, and PostgreSQL**.

The application allows users to manage their daily expenses with complete CRUD functionality and serves as a backend learning project focused on modern full-stack development.

---

# 🚀 Features

- ✅ Add Expense
- ✅ View Expenses
- ✅ Update Expense
- ✅ Delete Expense
- ✅ PostgreSQL Database Integration
- ✅ REST API using Express.js
- ✅ Prisma ORM
- ✅ Responsive UI
- 🔄 Dashboard (In Progress)
- 🔄 Expense Analytics (Planned)
- 🔄 AI Expense Suggestions (Planned)

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS

## Backend

- Node.js
- Express.js
- Prisma ORM

## Database

- PostgreSQL

---

# 📁 Project Structure

```text
ExpenseTracker/

├── client/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Home
│   │   │   ├── Dashboard
│   │   │   ├── AddExpense
│   │   │   ├── ExpenseList
│   │   │   └── Analysis
│   │   └── storage/
│   └── package.json
│
├── server/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── server.js
│   ├── .env
│   └── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Client Setup

```bash
cd client

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

## Server Setup

```bash
cd server

npm install
```

Install dependencies

```bash
npm install express cors dotenv
npm install prisma --save-dev
npm install @prisma/client
```

Initialize Prisma

```bash
npx prisma init
```

---

# 🗄 Database Setup

Create a PostgreSQL database.

Update the `.env` file.

```env
DATABASE_URL="postgresql://username:password@localhost:5432/expense_tracker"
```

Run migration

```bash
npx prisma migrate dev --name init
```

(Optional)

Open Prisma Studio

```bash
npx prisma studio
```

---

# ▶️ Run Backend

```bash
node server.js
```

or

```bash
nodemon server.js
```

Backend runs on

```
http://localhost:3000
```

---

# 🌐 REST API

## GET

```
GET /expenses
```

Returns all expenses.

---

## POST

```
POST /expenses
```

Creates a new expense.

---

## PATCH

```
PATCH /expenses/:id
```

Updates an existing expense.

---

## DELETE

```
DELETE /expenses/:id
```

Deletes an expense.

---

# 🏗 Architecture

```text
React
   │
   ▼
Express
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

---

# 📌 Current Progress

- ✅ PostgreSQL Setup
- ✅ Prisma Integration
- ✅ Express REST API
- ✅ CRUD Operations
- ✅ React Integration
- ✅ CORS Configuration
- ✅ Edit Expense
- ✅ Delete Expense

---

# 🚀 Upcoming Features

- Dashboard Cards
- Monthly Analytics
- Charts
- Category-wise Reports
- Authentication (JWT)
- User Accounts
- AI Expense Suggestions
- Budget Planning
- Deployment

---

# 📚 Learning Goals

This project is part of my Full Stack Developer roadmap where I'm learning:

- React
- Express.js
- REST APIs
- PostgreSQL
- Prisma ORM
- Backend Architecture
- Full Stack CRUD
- Authentication
- Deployment

---

# 👨‍💻 Author

**Abhay Kumar**

Building this project as part of my journey toward becoming a Full Stack & AI Developer.