import { useEffect, useState } from "react"
import AddExpense from "./AddExpense"
import Dashboard from "./Dashboard"
import ExpenseList from "./ExpenseList"

const Home = () => {

  const [AllExpense, setAllExpense] = useState([])

  useEffect(()=>{
    console.log(AllExpense.length)
    const data  = localStorage.getItem("AllExpense")
    if(!data || data === "undefined"){
      console.log(AllExpense,"2")
    }
    else{
      setAllExpense(JSON.parse(localStorage.getItem("AllExpense")))
        
    }
  },[])

// adding new item by the data received from 
  const AddNewExpense = (amount, category, subcategory, date) => {
    const newExpense = {
      amount,
      category,
      subcategory,
      date

    }
    console.log(AllExpense)
    const LatestExpense = [...AllExpense, newExpense]
    setAllExpense(LatestExpense)

    localStorage.setItem("AllExpense", JSON.stringify(LatestExpense))
    

  }
  return (
    <div className="w-full  border m-auto p-2 overflow-hidden">
      <Dashboard />
      <div className="fixed bottom-53 right-6 p-2 text-nowrap  max-w-11 hover:max-w-64 transition-[max-width] duration-1000 ease-in-out overflow-hidden  bg-white hover: text-purple-600 bold text-lg  rounded-4xl border-3 border-purple-700 cursor-pointer ">  ➕ Add Expense </div>
      <AddExpense AddNewExpense={AddNewExpense} />
      <ExpenseList AllExpense ={AllExpense}/>
    </div>
  )
}

export default Home