import { useEffect, useState } from "react"
import AddExpense from "./AddExpense"
import Dashboard from "./Dashboard"
import ExpenseList from "./ExpenseList"
import { BASE_URL } from "../storage/constant"

const Home = () => {

  const [AllExpense, setAllExpense] = useState([])
  const [displayAddExpense, setDisplayAddExpense] = useState(false)

  useEffect(() => {
    // console.log(AllExpense.length)
    try{

      fetchExpenses()
    }
    catch(e){
      console.log(e)
    }
    
    // now data from local storage
    // const data = localStorage.getItem("AllExpense")
    // if (!data || data === "undefined") {
    //   console.log(AllExpense, "2")
    // }
    // else {
    //   setAllExpense(JSON.parse(localStorage.getItem("AllExpense")))

    // }
  }, [])

  // Closing the popUp
  const onClose = () => {
    setDisplayAddExpense(false)
  }

  // adding new item by the data received from 
  const AddNewExpense = async (amount, category, subcategory, date, notes) => {
    const newExpense = {
      // id: crypto.randomUUID(),
      amount,
      category,
      subcategory,
      date,
      notes
    }
    const createdExpense  = await sendData(newExpense)
    console.log(AllExpense,createdExpense)
    const LatestExpense = [...AllExpense, createdExpense]
    setAllExpense(LatestExpense)

    // localStorage.setItem("AllExpense", JSON.stringify(LatestExpense))


  }
  // get data from database

  const fetchExpenses = async ()=>{
      const response  = await fetch("http://localhost:3000/expenses")
      const result = await response.json()
      console.log(result)
      setAllExpense(result)
  }

// Post request async request
  const sendData = async (data) => {
    try {

      const response = await fetch("http://localhost:3000/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonData = await response.json()
      return jsonData
    }
    catch (e) {
      console.log(e)
    }
  }

  // delete method called
  const handleDelete = async (id)=>{
    console.log(id)
    try{

      const response  = await fetch("http://localhost:3000/expenses/"+id,{
        method:"DELETE"
      })
      const json = await response.json()
      console.log(json.id)
      const updatedList = [...AllExpense]
      const resultList = updatedList.filter((item)=> item.id !==json.id)
      console.log(resultList)
      setAllExpense(resultList)
    }
    catch(e){
      console.log(e)
    }
  } 

  // handle Update
    const handleUpdate = async(id)=>{
      const response = await fetch(BASE_URL+"/expenses/"+id, {
            method:"PATCH",
            headers:{
              "content-Type":"application/json",
            },
            body :JSON.stringify()
      })

    }


  return (
    <div className="w-full  border m-auto p-2 overflow-hidden">
      <Dashboard />
      <div onClick={() => setDisplayAddExpense(true)} className="fixed bottom-53 right-6 p-2 text-nowrap  max-w-11 hover:max-w-64 transition-[max-width] duration-1000 ease-in-out overflow-hidden  bg-white text-purple-600 bold text-lg  rounded-4xl border-3 border-purple-700 cursor-pointer ">  ➕ Add Expense </div>
      {displayAddExpense &&
        <AddExpense AddNewExpense={AddNewExpense} onClose={onClose} />
      }
      <ExpenseList AllExpense={AllExpense} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  )
}

export default Home