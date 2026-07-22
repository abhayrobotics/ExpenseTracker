import { useEffect, useState } from "react";
import { CATEGORY, SUBCATEGORY } from "../storage/constant";

const AddExpense = ({ AddNewExpense,editableExpense,UpdateExpenseDB, onClose }) => {
  const [editFlag,setEditFlag] =useState(false)
  const [id,setId] =useState("")
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Grocery");
  const [subcategory, setSubcategory] = useState(SUBCATEGORY[category][0]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes,setNotes] =useState("")
  

  // setting the max date allowed
  const maxDate = () => {
    let today = new Date();
    return today.toISOString().split("T")[0];
  };

  // calling the parent function to update
  const handleAdd = () => {
    if(editFlag){
      console.log(date)
      setEditFlag(false)
      UpdateExpenseDB(id,amount, category, subcategory, date,notes)
    }
    else{
      // console.log(date)
      AddNewExpense(amount, category, subcategory, date,notes);
    }
    onClose()
  };

  // update the components with new data 
  useEffect(()=>{
    // EditableExpense exists then update the value
    if(Object.values(editableExpense).length>0){
      setEditFlag(true)
      const {id,amount,category,subcategory,date,notes} = editableExpense;
      
      const formatDate = date.split("T")[0]
    setId(id)
    setAmount(amount);
    setCategory(category)
    setSubcategory(subcategory)
    setNotes(notes)
    setDate(formatDate)
    }
  },[])
  
  
  // handlecategory
  const handlecategory =(e)=>{
    const newCategoySelected = e.target.value
    setCategory(newCategoySelected)
    setSubcategory(SUBCATEGORY[newCategoySelected][0])

  }

  return (
    <div className="fixed inset-0 z-50   flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl  m-2 ">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-2 ">
          <h2 className="text-lg font-semibold text-gray-800">
          {editFlag?"Update Expense":"Add Expense"}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="space-y-2 px-5 py-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter the amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => handlecategory(e)}
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            >
              {CATEGORY?.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Subcategory
            </label>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            >
              {SUBCATEGORY[category]?.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Notes
            </label>
            <input
              type="text"
              placeholder="Notes"
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" value={notes} onChange={(e)=>setNotes(e.target.value)} maxLength={20}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              max={maxDate()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-200 px-5 py-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
           
          
          <button
            onClick={handleAdd}
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
          {editFlag?"Update Expense":"Add Expense"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;