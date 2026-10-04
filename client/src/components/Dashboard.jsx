import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import BudgetPlanModal from "./BudgetPlanModal";

const Dashboard = ({ dashboard_data, budgetData, handleLogout, choosenCategory, setChoosenCategory }) => {

  const { totalSpendNow, TotalSavings, Grocery, LifeStyle } = dashboard_data;
  // console.log(budgetData)
  // console.log(budgetData?.find((item)=>item.title=="Balance").value)

  const balance = budgetData?.find((item) => item?.title == "Balance")?.value;
  const groceryBudget = budgetData?.find((item) => item.title == "Grocery")?.value
  const lifeStyleBudget = budgetData?.find((item) => item.title == "LifeStyle")?.value
  const savingBudget = budgetData?.find((item) => item.title == "Savings")?.value


  // Configuration array for cards
  const dashboardCards = [
    {
      id: "totalSpend",
      title: "Total Spend",
      amount: totalSpendNow,
      category: "",
      desc: "Spent this month",
      colorStyles: {
        bg: "bg-rose-50",
        border: "border-rose-100",
        title: "text-rose-700",
        amount: "text-rose-800",
      },
    },
    {
      id: "savings",
      title: "Total Savings",
      amount: TotalSavings,
      budget: savingBudget,
      category: "Savings",
      isSavings: true,
      colorStyles: {
        bg: "bg-blue-50",
        border: "border-blue-100",
        title: "text-blue-700",
        amount: "text-blue-800",
      },
    },
    {
      id: "grocery",
      title: "Grocery",
      amount: Grocery,
      budget: groceryBudget,
      category: "Grocery",
      colorStyles: {
        bg: "bg-amber-50",
        border: "border-amber-100",
        title: "text-amber-700",
        amount: "text-amber-800",
      },
    },
    {
      id: "lifestyle",
      title: "LifeStyle",
      amount: LifeStyle,
      budget: lifeStyleBudget,
      category: "LifeStyle",
      colorStyles: {
        bg: "bg-fuchsia-50",
        border: "border-fuchsia-100",
        title: "text-fuchsia-700",
        amount: "text-fuchsia-800",
      },
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">


      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {/* Balance */}
        <div className="col-span-2   bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-3 shadow-sm">
          <p className="text-sm font-medium opacity-90">Balance</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-2">₹{balance - totalSpendNow}</h3>
          <div className="flex justify-between items-center">

            <p className="text-xs md:text-sm font-semibold text-gray-200 mt-2">Starting Balance: {`₹ ${balance}`} </p>
            <p className={`  p-1 rounded-sm ${Math.round(totalSpendNow / balance * 100) > 90 ? "text-red-600 bg-red-100  text-xs" : "text-green-600 bg-green-100 p-2 md:text-xs text-[10px]"}  mt-1`}>{` ${Math.round(totalSpendNow / balance * 100)}% Utilised`} </p>
          </div>
          {/* <p className="text-xs mt-2 opacity-80">Available after expenses</p> */}
        </div>

        {/* Small cards  */}
        {dashboardCards?.map((card) => (
          <div onClick={() => setChoosenCategory(card.category)} className={`hover:border-black cursor-pointer ${card?.colorStyles?.bg} ${card?.border} border border-rose-100 rounded-2xl p-2 shadow-sm`}>
            <p className={`text-sm  font-medium ${card?.colorStyles?.title}`}>{card.title}</p>
            <h3 className={`text-sm md:text-md font-bold ${card?.colorStyles?.amount} mt-2`}>
              ₹{card?.amount}
            </h3>
            {card?.desc ?
              // Total spend
              <p className="text-[10px] md:text-xs text-rose-600 mt-1">{card?.desc}</p>
              :
              // All other cards
            <div className="flex justify-between items-center">

              <p className="text-[10px] md:text-xs text-fuchsia-600">Budget: {`₹ ${card.budget}`} </p>
              <p className={`  p-1 rounded-sm ${Math.round(card?.amount / card?.budget * 100) < 100 ? "text-red-600 bg-red-100 p-0.5 rounded-md text-xs" : "text-green-600 bg-green-100 p-1 text-[10px]"}  `}>{` ${Math.round(card?.amount / card?.budget * 100)}% ${card?.isSavings?"Saved":"Utilised"}`} </p>
            </div>
            }
          </div>
        ))

        }


      </div>
    </div>
  );
};

export default Dashboard;