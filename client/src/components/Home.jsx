import { useEffect, useState } from "react"
import AddExpense from "./AddExpense"
import Dashboard from "./Dashboard"
import ExpenseList from "./ExpenseList"
import { fetchExpenses, createExpense, deleteExpense,updateExpense } from "../services/expenseServices"

const Home = () => {

  const [AllExpense, setAllExpense] = useState([])
  const [displayAddExpense, setDisplayAddExpense] = useState(false)
  const [editableExpense, setEditableExpense] = useState({})

  useEffect(() => {
    // console.log(AllExpense.length)
    try {

      loadExpenses()
    }
    catch (e) {
      console.log(e)
    }

  }, [])

  // Closing the popUp
  const onClose = () => {
    setDisplayAddExpense(false)
  }

  // adding new item by the data received from 

  const AddNewExpense = async (amount, category, subcategory, date, notes) => {
    try {

      const newExpense = {
        // id: crypto.randomUUID(),
        amount,
        category,
        subcategory,
        date,
        notes
      }
      const createdExpense = await createExpense(newExpense)

      setAllExpense((prev) => [...prev, createdExpense])
    }
    catch (e) {
      console.log(e)
    }    

  }
  // get data from database
  const loadExpenses = async () => {
    try {
      const result = await fetchExpenses()
      setAllExpense(result)

    }
    catch (e) {
      console.log(e)
    }
  }


  // delete method called
  const handleDelete = async (id)=>{

    try{
      // Delete in DB 
      const json = await deleteExpense(id)
 
      const resultList = AllExpense.filter((item) => item.id !== json.id)
      console.log(resultList)
      setAllExpense(resultList)
    }
    catch(e){
      console.log(e)
    }
  }

  //  handle Update
  const handleUpdate = async (id) => {

    setEditableExpense(AllExpense.find((item) => item.id === id))
    console.log(editableExpense)
    setDisplayAddExpense(true)

  }

  // updating he DB 

  const UpdateExpenseDB = async (id, amount, category, subcategory, date, notes) => {
    console.log(date)
    // const formatDate = date+"T00:00:00.000Z"
    const updatedExpense = {
      id,
      amount,
      category,
      subcategory,
      date,
      notes
    }
    console.log(BASE_URL + "/expenses/" + id)
    try {
      

      const updatedExpenseDB = await updateExpense(id,updatedExpense);
      console.log(updatedExpenseDB)

      // updating me REact UI with updated data
      setAllExpense((prev) => {
        const updatedList = prev.map((item) => {
          if (item.id === id) {
            return updatedExpenseDB
          }
          else {
            return item
          }
        })
        return updatedList
      })
    }
    catch (e) {
      console.log(e)
    }


  }

  return (
    <div className="w-full  border m-auto p-2 overflow-hidden">
      <Dashboard />
      <div onClick={() => setDisplayAddExpense(true)} className="fixed bottom-53 right-6 p-2 text-nowrap  max-w-11 hover:max-w-64 transition-[max-width] duration-1000 ease-in-out overflow-hidden  bg-white text-purple-600 bold text-lg  rounded-4xl border-3 border-purple-700 cursor-pointer ">  ➕ Add Expense </div>
      {displayAddExpense &&
        <AddExpense AddNewExpense={AddNewExpense} editableExpense={editableExpense} UpdateExpenseDB={UpdateExpenseDB} onClose={onClose} />
      }
      <ExpenseList AllExpense={AllExpense} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  )
}

export default Home