import { SquarePen, Trash2 } from "lucide-react";
import { ExportExcelSheet } from "./ExportExcelSheet";
const ExpenseList = ({ AllExpense, handleDelete, handleUpdate }) => {


  
  return (
    <div className="bg-white rounded-2xl shadow-md my-2 p-2 md:p-2">
      <div className="mb-4">

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 ">
          Expenses
        </h2>
        <div className="flex justify-end w-full">

        <h3 className="text-md md:text-md font-semibold text-gray-700 m-2 ml-0 cursor-pointer px-2 py-1 rounded-md hover:bg-green-300 ">Filter</h3>
        <ExportExcelSheet  AllExpense ={AllExpense}/>
        </div>
      </div>
      {AllExpense.length === 0 ? "Add your first expense to start tracking"
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
              {AllExpense?.map((item, index) => {
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