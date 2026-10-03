// export const BASE_URL = "http://localhost:3000";
import { Wallet, ShoppingCart, Sparkles, PiggyBank, X } from "lucide-react";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const CATEGORY = [
  "Grocery",
  "Savings",
  "LifeStyle",
  "Income",
  "House Rent",
  "Parent Expense",
  "Credit Card Bill",
  "Maid",
  "Milk",
  "Water",
  "Wife",
  "Miscellaneous",
  "Travel",
  "Medicine",
  "Recharge",
  "Transport",
  "Shopping",
];
export const SUBCATEGORY = {
  Savings: [
    "Recurring Deposit",
    "Fixed Deposit",
    "SIP",
    "Stocks",
    "PPF contribution",
    "Piggy Bank",
  ],
  LifeStyle: [
    "Shopping",
    "Leisure",
    "Dining Out",
    "Eating Out",
    "Travel",
    "Entertainment",
    "Movies",
    "Coffee",
    "Electronics",
    "Gifting",
  ],
  Income: [
    "Salary",
    "Bonus",
    "Mutual Fund",
    "Stocks Profit",
    "IPO Profit",
    "Deposit",
    "Loan",
  ],

  "House Rent": [
    "Monthly Rent",
    "Maintenance",
    "Electricity",
    "Gas",
    "Internet",
  ],

  "Parent Expense": [
    "Monthly Support",
    "Medicine",
    "Doctor Visit",
    "Groceries",
    "Emergency",
  ],

  "Credit Card Bill": [
    "Bill Payment",
    "EMI",
    "Late Fee",
    "Interest Charge",
    "Annual Fee",
  ],

  Maid: ["Salary", "Bonus", "Festival Bonus", "Extra Work"],

  Milk: ["Daily Milk", "Curd", "Paneer", "Butter", "Other Dairy"],

  Grocery: [
    "Vegetables",
    "Fruits",
    "Rice & Atta",
    "Oil",
    "Spices",
    "Snacks",
    "Household Items",
  ],

  Water: ["Drinking Water", "Jar/Can Refill", "Filter Service"],

  Wife: [
    "Pocket Money",
    "Shopping",
    "Stationery",
    "Toy / Small Treat",
    "Cosmetics",
  ],

  Miscellaneous: [
    "Unexpected Expense",
    "Gift",
    "Repair",
    "Home Item",
    "Cash Withdrawal",
    "Other",
  ],

  Travel: ["Train", "Bus", "Hotel", "Food", "Sightseeing", "Local Transport"],

  Medicine: [
    "Doctor Consultation",
    "Tests",
    "Medicines",
    "Pharmacy",
    "Emergency",
  ],

  Recharge: [
    "Mobile Recharge",
    "Internet Recharge",
    "DTH Recharge",
    "OTT Subscription",
  ],

  Transport: ["Auto", "Bus", "Fuel", "Parking", "Bike Service"],
  Shopping: ["Clothes", "Cosmetics", "Home Decor"],
};

export const EXPENSE_TYPE = [
  "Household Expense",
  "Good to have",
  "Savings",
  "Entertainment ",
];

export const DASHBOARD_CARDS = [
  {
    Icon: Wallet,
    title: "Balance",
    color: "purple",
    desc: " Amount available for this budget period. ",
    value: 60000,
    month:"",
    year:""
  },
  {
    Icon: ShoppingCart,
    title: "Grocery",
    color: "green",
    desc: "Maximum monthly expense",
    value: 5000,
  },
  {
    Icon: Sparkles,
    title: "LifeStyle",
    color: "yellow",
    desc: "Maximum monthly expense",
    value: 5000,
  },
  {
    Icon: PiggyBank,
    title: "Savings",
    color: "blue",
    desc: "Minimum amount you must save monthly ",
    value: 5000,
  },
];

export const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const year =[
  2026,
  2027,
  2028
]