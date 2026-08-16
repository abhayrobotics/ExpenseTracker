import { useEffect, useState } from "react"
import AddExpense from "./AddExpense"
import Dashboard from "./Dashboard"
import ExpenseList from "./ExpenseList"
import { fetchExpenses, createExpense, deleteExpense, updateExpense } from "../services/expenseServices"
import Signin from "./Signin"
import DatabaseError from "./DatabaseError"

const Home = ({ handleLogout }) => {

  const [isSignIn, setIsSignIn] = useState(false)
  const [AllExpense, setAllExpense] = useState([])
  const [displayAddExpense, setDisplayAddExpense] = useState(false)
  const [editableExpense, setEditableExpense] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const [showErrorPage, setShowErrorPage] = useState({status:false,retryAction:null})
  // const [totalSpend,setTotalSpend] = useState(0)

  useEffect(() => {
    // console.log(AllExpense.length)

    loadExpenses()
  }, [])

  // Dashboard Data
  
  const totalSpendNow = AllExpense.reduce((sum, item) => sum + item.amount, 0)
  const TotalSavings = AllExpense.filter((item) => item.category === "Savings").reduce((sum, item) => sum + item.amount, 0)
  const Grocery = AllExpense.filter((item) => item.category === "Grocery").reduce((sum, item) => sum + item.amount, 0)
  const LifeStyle = AllExpense.filter((item) => item.category === "LifeStyle").reduce((sum, item) => sum + item.amount, 0)
  const dashboard_data = {
    totalSpendNow,
    TotalSavings,
    Grocery,
    LifeStyle
  }
  // console.log(totalSpendNow)



  // Closing the popUp
  const onClose = () => {
    setDisplayAddExpense(false)
  }

  // adding new item by the data received from 


  const AddNewExpense = async (amount, category, subcategory, date, notes) => {
    try {
      console.log("retrying")
      const newExpense = {
        // id: crypto.randomUUID(),
        amount,
        category,
        subcategory,
        date,
        notes
      }
      const token = localStorage.getItem("token")
      const createdExpense = await createExpense(newExpense, token)

      setAllExpense((prev) => [...prev, createdExpense])
      setShowErrorPage({status:false})
    }
    catch (e) {
      console.log(e,"retry")
       setShowErrorPage({
        status:true,
        retryAction: ()=>AddNewExpense(amount, category, subcategory, date, notes)
      })

    }

  }
  // get data from database
  const loadExpenses = async () => {
    try {
      if (localStorage.getItem("token")) {

        const token = localStorage.getItem("token")
        const result = await fetchExpenses(token)
        // console.log(result)
        setAllExpense(result)

        
          setShowErrorPage({status:false})
      }

    }
    catch (e) {
      console.log(e,"retry")
      // retry database error page
      setShowErrorPage({
        status:true,
        retryAction: ()=>loadExpenses()
      })
    }
  }


  // delete method called
  const handleDelete = async (id) => {

    try {
      // Delete in DB 
      const token = localStorage.getItem("token")
      const json = await deleteExpense(id, token)

      if (json.count === 1) {
        setAllExpense(prev =>
          prev.filter(item => item.id !== id)
        );
        setShowErrorPage({status:false})
      }
    }
    catch (e) {
      console.log(e)
      setShowErrorPage({
        status:true,
        retryAction: ()=>handleDelete(id)
      })
    }
  }

  //  handle Update
  const handleUpdate = async (id) => {

    setEditableExpense(AllExpense.find((item) => item.id === id))
    console.log(editableExpense)
    setDisplayAddExpense(true)

  }

  // updating the DB 

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
    // console.log(BASE_URL + "/expenses/" + id)
    try {
      if (!!localStorage.getItem("token")) {

        const token = localStorage.getItem("token")

        const updatedExpenseDB = await updateExpense(id, updatedExpense, token);
        // if failed
        if (updatedExpenseDB?.message) {
          setErrorMessage(updatedExpenseDB.message)
          console.log(updatedExpenseDB)
        }
        else {


          // updating  REact UI with updated data
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
          setShowErrorPage({status:false})
          setEditableExpense({})
        }
      }
    }
    catch (e) {
      console.log(e)
      // retry database error page
      setShowErrorPage({
        status:true,
        retryAction: ()=>UpdateExpenseDB(id, amount, category, subcategory, date, notes)
      })
    }


  }
  // confirm sign in from child
  const signInStatus = (status) => {
    setIsSignIn(status)
  }
  return (
    <div className="w-full bg-white min-h-screen border m-auto p-2 overflow-hidden">
      {showErrorPage?.status ? <DatabaseError retryAction={showErrorPage?.retryAction} /> :

        <div>
          <Dashboard handleLogout={handleLogout} dashboard_data={dashboard_data} />
          <div onClick={() => setDisplayAddExpense(true)} className="fixed bottom-53 right-6 p-2 text-nowrap  max-w-11 hover:max-w-64 transition-[max-width] duration-1000 ease-in-out overflow-hidden  bg-white text-purple-600 bold text-lg  rounded-4xl border-3 border-purple-700 cursor-pointer ">  ➕ Add Expense </div>
          {displayAddExpense &&
            <AddExpense AddNewExpense={AddNewExpense} editableExpense={editableExpense} UpdateExpenseDB={UpdateExpenseDB} onClose={onClose} />
          }
          <ExpenseList AllExpense={AllExpense} handleDelete={handleDelete} handleUpdate={handleUpdate} />
          <div>{errorMessage}</div>
        </div>
      }
    </div>
  )
}

export default Home