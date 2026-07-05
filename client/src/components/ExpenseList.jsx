
const ExpenseList = ({ AllExpense }) => {


  return (
    <div className="bg-white rounded-2xl shadow-md my-2 p-2 md:p-2">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        Expenses
      </h2>
      {AllExpense.length === 0 ? "Add your first expense to start tracking"
        :
        <div className="overflow-x-hidden rounded-xl border border-gray-200">
          <table className="min-w-full border-collapse text-sm ">
            <thead className="bg-amber-50 text-amber-800">

              <tr>
                <th className="px-2 py-1 text-left font-semibold border-b border-gray-200">
                  Sl no.
                </th>
                <th className="px-2 py-1 text-left font-semibold border-b border-gray-200">
                  Category
                </th>
                <th className="px-2 py-1 text-left font-semibold border-b border-gray-200">
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
                <th className="px-2 py-1 text-left font-semibold border-b border-gray-200">
                  Update
                </th>

              </tr>

            </thead>

            <tbody className="text-gray-700 text-xs">
              {AllExpense?.map((item, index) => {
                return (

                  <tr key={item?.id} className="odd:bg-white even:bg-gray-50 hover:bg-amber-50 transition  ">
                    <td className="px-2 py-1 border-b border-gray-200">{index + 1}</td>
                    <td className="px-2 py-1 border-b border-gray-200">{item?.category}</td>
                    <td className="px-2 py-1 border-b border-gray-200">{item?.subcategory}</td>
                    <td className="px-2 py-1 border-b border-gray-200 text-right font-medium">
                      ₹{item?.amount}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-200">{item?.date}</td>
                    <td className="px-2 py-1 border-b border-gray-200  max-w-20 truncate">{item?.notes}</td>
                    <td className="px-2 py-1 border-b border-gray-200">📝 ❌</td>
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