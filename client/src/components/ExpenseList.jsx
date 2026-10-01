import { SquarePen, Trash2 } from "lucide-react";
import { ExportExcelSheet } from "./ExportExcelSheet";
import { month, year } from "../storage/constant";
import { useEffect, useState } from "react";
const ExpenseList = ({ AllExpense, handleDelete, handleUpdate }) => {

  const [monthChoice, setMonthChoice] = useState(month[new Date().getMonth()])
  const [yearChoice, setYearChoice] = useState(new Date().getFullYear())
  const [UpdatedList,setUpdatedList]=useState([])

  console.log(monthChoice,yearChoice)

  useEffect(()=>{
    const filterList =  AllExpense.filter((item)=>{

    const LogDate = new Date(item.date);
    let logMonth = LogDate.getMonth()
    let logYear = LogDate.getFullYear()
    // console.log(month[logMonth+1])

    return month[logMonth]== monthChoice && logYear == yearChoice
    
  })
  console.log(filterList)

  setUpdatedList(filterList)
  },[monthChoice,yearChoice])
  // getting the month
  
  
  return (
    <div className="bg-white rounded-2xl shadow-md my-2 p-2 md:p-2">
      <div className="mb-4">

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 ">
          Expenses
        </h2>
        <div className="flex justify-center w-full">

          <h3 className="text-md md:text-md font-semibold text-gray-700 m-2 ml-0 cursor-pointer px-2 py-1 rounded-md hover:bg-green-300 ">Filter</h3>
          
          <div className="flex items-center gap-2.5">
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
          <ExportExcelSheet AllExpense={AllExpense} />
        </div>
      </div>
      {UpdatedList.length === 0 ? "Add your first expense to start tracking"
        :
        <div className="scrollbar-thumb-purple-700 scrollbar-track-sky-100 overflow-auto  rounded-xl border border-gray-200">
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

                  <tr key={index} className="odd:bg-white even:bg-gray-50 hover:bg-amber-50 transition  ">
                    <td className="px-2 py-1 border-b border-gray-200">{index + 1}</td>
                    <td className="px-2 py-1 border-b border-gray-200">{item?.category}</td>
                    <td className="px-2 py-1 border-b border-gray-200">{item?.subcategory}</td>
                    <td className="px-2 py-1 border-b border-gray-200 text-right font-medium">
                      ₹{item?.amount}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-200  text-nowrap ">{item?.date.split("T")[0]}</td>
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
      }
    </div>
  );
};

export default ExpenseList;