import { SquarePen, Trash2, FunnelX } from "lucide-react";
import { ExportExcelSheet } from "./ExportExcelSheet";

import { month, year } from "../storage/constant";

import { useEffect, useMemo, useState } from "react";
const ExpenseList = ({ AllExpense, handleDelete, handleUpdate, monthChoice, setMonthChoice, yearChoice, setYearChoice, choosenCategory, setChoosenCategory }) => {


  // const [UpdatedList, setUpdatedList] = useState([])

  // console.log(monthChoice,yearChoice)
  const UpdatedList = useMemo(() => {
    if (!Array.isArray(AllExpense)) return [];

    return AllExpense.filter((item) => {
      if (!item?.date) return false;

      // Use UTC to prevent cross-timezone date shifting
      const logDate = new Date(item.date);
      if (isNaN(logDate.getTime())) return false;

      const logMonth = month[logDate.getUTCMonth()];
      const logYear = String(logDate.getUTCFullYear());
      const matchesCategory =
        choosenCategory === "" || item.category === choosenCategory;
      return logMonth === monthChoice && logYear === String(yearChoice) && matchesCategory;
    });
  }, [AllExpense, monthChoice, yearChoice, choosenCategory]);



  return (
    <div className="bg-white rounded-2xl shadow-md my-2 p-2 md:p-2">
      <div className="mb-4">

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 ">
          Expenses
        </h2>
        <div className="flex justify-center w-full">

          <div onClick={() => setChoosenCategory("")} className={`flex items-center cursor-pointer hover:bg-purple-500  ${choosenCategory==""? "text-gray-800":"text-red-700"}  hover:text-gray-50 mr-3 px-1 rounded-md`}>
            <div className="text-sm  font-semibold">{choosenCategory}</div>
            <button className="text-sm md:text-md font-semibold m-2 ml-0  pl-2 py-1 rounded-md ">

              <FunnelX size={16} />
            </button>
          </div> 

          {/* MOnth and year calculator */}
          
          <div className="flex items-center gap-2.5">
            {/* Month Selector */}
            <div className="relative flex-1">
              <select
                value={monthChoice}
                onChange={(e) => setMonthChoice(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-1 pl-3 pr-8 text-xs sm:text-sm font-medium text-slate-700 shadow-xs transition hover:border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 cursor-pointer"
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
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-1 pl-3 pr-8 text-xs sm:text-sm font-medium text-slate-700 shadow-xs transition hover:border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 cursor-pointer"
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
          <ExportExcelSheet UpdatedList={UpdatedList} />
        </div>
      </div>
      {UpdatedList.length === 0 ? "Add your first expense to start tracking"
        :
        
        <div className="w-full">
          {/* ----------------- MOBILE VIEW: Cards (Hidden on Desktop) ----------------- */}
          <div className="flex flex-col gap-2.5 md:hidden">
            {UpdatedList?.map((item,index) => (
              <div
                key={item.createdAt || item.id}
                className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                {/* Left: Category info & Date/Notes */}
                <div className="flex flex-col min-w-0 pr-3">
                  <div className="flex items-center ">
                  <span className="text-gray-800">{index+1}. </span>
                  <span className="font-semibold text-gray-800 text-sm pl-1 truncate">
                    {item?.subcategory || item?.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="text-xs text-gray-500 mt-0.5 truncate"> {item?.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs pl-2 text-gray-500 mt-0.5 truncate">
                    {/* <span>{item?.category}</span> */}
                    <span className="shrink-0 pl-2">{item?.date?.split("T")[0]}</span>
                    
                  {item?.notes && (
                    <span>
                    <span className="mx-2">•</span>
                    <span className="text-[11px] text-gray-400 truncate mt-0.5">
                      Note: {item.notes}
                    </span>
                    </span>
                  )}
                  </div>
                </div>

                {/* Right: Amount & Actions */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="font-bold text-gray-900 text-sm">
                    ₹{item?.amount}
                  </span>
                  <div className="flex items-center gap-1.5 pl-1.5 border-l border-gray-200">
                    <button
                      type="button"
                      onClick={() => handleUpdate(item.id)}
                      className="p-1 text-purple-500 hover:text-purple-700 active:scale-95"
                    >
                      <SquarePen size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="p-1 text-purple-500 hover:text-red-600 active:scale-95"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        {/* // Desktop view */}
          <div className="hidden md:block scrollbar-thumb-purple-700 scrollbar-track-sky-100 overflow-auto  rounded-xl border border-gray-200">
            <table className="min-w-full border-collapse text-sm ">
              <thead className="bg-amber-50 text-amber-800">

                <tr>
                  <th className="px-2 py-1 text-left font-semibold border-b border-gray-200 text-nowrap">
                    Sl no.
                  </th>
                  <th className="px-2 py-1 text-left font-semibold border-b border-gray-200">
                    Category
                  </th>
                  <th className="px-2 py-1 text-left font-semibold border-b border-gray-200 text-nowrap">
                    Sub Category
                  </th>
                  <th className="px-2 py-1 text-right font-semibold border-b border-gray-200">
                    Amount
                  </th>
                  <th className="px-2 py-1 text-left font-semibold border-b border-gray-200">
                    Date
                  </th>
                  <th className="px-2 py-1 text-left font-semibold border-b border-gray-200">
                    Notes
                  </th>
                  <th className="px-2 py-1 max-w-7.5 text-left font-semibold border-b border-gray-200">
                  </th>
                  <th className="px-2 py-1  max-w-7.5 text-left font-semibold border-b border-gray-200">

                  </th>
                </tr>

              </thead>

              <tbody className="text-gray-700 text-xs">
                {UpdatedList?.map((item, index) => {
                  return (

                    <tr key={item.createdAt} className="odd:bg-white even:bg-gray-50 hover:bg-amber-50 transition  ">
                      <td className="px-2 py-1 border-b border-gray-200">{index + 1}</td>
                      <td className="px-2 py-1 border-b border-gray-200">{item?.category}</td>
                      <td className="px-2 py-1 border-b border-gray-200">{item?.subcategory}</td>
                      <td className="px-2 py-1 border-b border-gray-200 text-right font-medium">
                        ₹{item?.amount}
                      </td>
                      <td className="px-2 py-1 border-b border-gray-200  text-nowrap ">{item?.date?.split("T")[0]}</td>
                      <td className="px-2 py-1 border-b border-gray-200  max-w-20 truncate">{item?.notes}</td>
                      <td className="px-2 py-1 border-b border-gray-200 " onClick={() => handleUpdate(item.id)}>
                        <SquarePen size={18} className="text-purple-500 hover:text-purple-700 cursor-pointer" /></td>
                      <td className="px-2 py-1 border-b border-gray-200" onClick={() => handleDelete(item.id)}>
                        <Trash2 size={18} className="text-purple-500 hover:text-red-700 cursor-pointer" /></td>
                      {/* <td className="px-2 py-1 border-b border-gray-200"></td> */}
                    </tr>)
                })}

              </tbody>
            </table>
          </div>
          </div>
      }
        </div>
  );
};

      export default ExpenseList;