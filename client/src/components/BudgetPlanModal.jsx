import {
  Wallet,
  ShoppingCart,
  Sparkles,
  PiggyBank,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import {month,year} from "../storage/constant"

const BudgetPlanModal = ({ setShowBudget, budgetData, setBudgetData, monthChoice,setMonthChoice ,yearChoice,setYearChoice }) => {



  const handleSubmit = () => {
    setBudgetData((prev)=>prev.map((element)=>({...element,month:monthChoice,year:yearChoice})))
    setShowBudget(false)
    // stale data (better use temp varibal for updated then setState)
    // console.log(budgetData)
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <Wallet size={24} />
              </div>

              <div>
                <h2 className=" text-md md:text-lg  font-bold text-gray-900">
                  Create Budget Plan
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Set your spending limits and savings target.
                </p>
                
              </div>
            </div>

            <button onClick={() => setShowBudget(false)} className="rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className=" px-6 py-1">


          {/* Limits */}
          <div>
            <div className="mb-3 flex items-center">
              <h3 className="font-semibold  text-sm text-gray-800">
                Spending limits and Savings target.
              </h3>
              {/* MOnth and year calculator */}
                <div className="flex items-center gap-2.5 ml-4">
                  {/* Month Selector */}
                  <div className="relative flex-1">
                    <select
                      value={monthChoice}
                      onChange={(e) => setMonthChoice(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs sm:text-sm font-medium text-slate-700 shadow-xs transition hover:border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 cursor-pointer"
                    >
                      {month?.map((item) => (
                        <option key={item} value={item} className="text-slate-800">
                          {item}
                        </option>
                      ))}
                    </select>
                    {/* Clean Chevron Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Year Selector */}
                  <div className="relative flex-1">
                    <select
                      value={yearChoice}
                      onChange={(e) => setYearChoice(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs sm:text-sm font-medium text-slate-700 shadow-xs transition hover:border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 cursor-pointer"
                    >
                      {year?.map((item) => (
                        <option key={item} value={item} className="text-slate-800">
                          {item}
                        </option>
                      ))}
                    </select>
                    {/* Clean Chevron Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

            </div>

            <div className="space-y-3">
              {budgetData?.map((item) => {
                const IconDiv = item?.Icon
                return (
                  
                    <div key={item.title} className="flex items-center gap-4 rounded-xl border border-gray-200 p-2 transition hover:border-purple-200 hover:bg-purple-50/30">
                      <div className={`rounded-lg bg-${item.color}-100 p-2 text-${item.color}-600`}>
                        <IconDiv size={21} />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.desc}
                        </p>
                      </div>

                      <div className="flex w-32 items-center rounded-lg border border-gray-300 bg-white px-3">
                        <span className="text-sm text-gray-400">₹</span>
                        <input
                          value={item.value}
                          onChange={(e) => setBudgetData((prev) => (prev.map((element) =>
                            element.title == item.title ? { ...element, value: e.target.value } :element
                          )))}
                          type="number"
                          placeholder="3,000"
                          className="w-full bg-transparent px-2 py-2 text-right text-sm outline-none"
                        />
                      </div>
                    </div>
                  
                )
              })}

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-gray-200 bg-gray-50 px-4 py-2">
          <button onClick={() => setShowBudget(false)} className="flex-1 text-sm rounded-xl border border-gray-800 bg-white px-2 py-1 font-semibold text-gray-700 transition hover:bg-gray-100">
            Cancel
          </button>

          <button onClick={handleSubmit} className="flex-1 text-sm rounded-xl bg-purple-600 px-2 py-1 font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700 active:scale-[0.98]">
            Create Budget Plan
          </button>
        </div>

      </div>
    </div>
  );
};

export default BudgetPlanModal;