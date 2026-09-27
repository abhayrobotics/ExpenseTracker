import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import BudgetPlanModal from "./BudgetPlanModal";

const Dashboard = ({ dashboard_data, budgetData, handleLogout }) => {

  const { totalSpendNow, TotalSavings, Grocery, LifeStyle } = dashboard_data;
  console.log(budgetData)
  // console.log(budgetData?.find((item)=>item.title=="Balance").value)

  const balance = budgetData?.find((item) => item?.title == "Balance")?.value;
  const groceryBudget = budgetData?.find((item) => item.title == "Grocery")?.value
  const LifeStyleBudget = budgetData?.find((item) => item.title == "LifeStyle")?.value
  const savingBudget = budgetData?.find((item) => item.title == "Savings")?.value

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">


      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {/* Balance */}
        <div className="col-span-2 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium opacity-90">Balance</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-2">₹{balance - totalSpendNow}</h3>
           <div className="flex justify-between items-center">

            <p className="text-sm font-semibold text-gray-600 mt-2">Starting Balance: {`₹ ${balance}`} </p>
            <p className={` font-semibold p-2 rounded-sm ${Math.round(totalSpendNow / balance * 100) > 90 ? "text-red-600 bg-red-100  text-xs" : "text-green-600 bg-green-100 p-2 text-xs"}  mt-2`}>{` ${Math.round(totalSpendNow / balance * 100)}% Utilized`} </p>
          </div>
          {/* <p className="text-xs mt-2 opacity-80">Available after expenses</p> */}
        </div>

        {/* Total Spend */}
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium text-rose-700">Total Spend</p>
          <h3 className="text-xl md:text-2xl font-bold text-rose-800 mt-2">
            ₹{totalSpendNow}
          </h3>
          <p className="text-xs text-rose-600 mt-2">Spent this month</p>
        </div>

        {/* Savings */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium text-blue-700">Total Savings</p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-800 mt-2">
            ₹{TotalSavings}
          </h3>
          <div className="flex justify-between items-center">

            <p className="text-xs text-fuchsia-600 mt-2">Budget: {`₹ ${savingBudget}`} </p>
            <p className={` font-semibold p-2 rounded-sm ${Math.round(TotalSavings / savingBudget * 100) < 100 ? "text-red-600 bg-red-100 p-2 rounded-sm text-xs" : "text-green-600 bg-green-100 p-2 text-xs"}  mt-2`}>{` ${Math.round(TotalSavings / savingBudget * 100)}% Saved`} </p>
          </div>
        </div>

        {/* Need */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium text-amber-700">Grocery </p>
          <h3 className="text-xl md:text-2xl font-bold text-amber-800 mt-2">
            ₹ {Grocery}
          </h3>

          <div className="flex justify-between items-center">

            <p className="text-xs text-fuchsia-600 mt-2">Budget: {`₹ ${groceryBudget}`} </p>
            <p className={` font-semibold p-2 rounded-sm ${Math.round(Grocery / groceryBudget * 100) > 100 ? "text-red-600 bg-red-100  text-xs" : "text-green-600 bg-green-100  text-xs"}  mt-2`}>{` ${Math.round(Grocery / groceryBudget * 100)}% Utilized`} </p>
          </div>
        </div>

        {/* Want */}
        <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium text-fuchsia-700">LifeStyle</p>
          <h3 className="text-xl md:text-2xl font-bold text-fuchsia-800 mt-2">
            ₹ {LifeStyle}
          </h3>
          <div className="flex justify-between items-center">

            <p className="text-xs text-fuchsia-600 mt-2">Budget: {`₹ ${LifeStyleBudget}`} </p>
            <p className={` font-semibold ${Math.round(LifeStyle / LifeStyleBudget * 100) > 100 ? "text-red-600 bg-red-100 p-2 rounded-sm text-xs" : "text-green-600 bg-green-100 p-2 text-xs"}  mt-2`}>{` ${Math.round(LifeStyle / LifeStyleBudget * 100)}% Utilized`} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;