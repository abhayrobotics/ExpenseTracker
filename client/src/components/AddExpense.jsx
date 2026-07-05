import { useState } from "react"
import { CATEGORY } from "../storage/constant"
import {SUBCATEGORY } from "../storage/constant"

const AddExpense = ({AddNewExpense}) => {
  const [amount,setAmount] = useState(0)
  const [category,setCategory] = useState("Grocery")
  const [subcategory,setSubcategory] = useState("")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  

  // setting the min date allowed
    const maxDate = () => {
        let today = new Date();
        // console.log(today.toISOString().split("T")[0])

        return today.toISOString().split("T")[0]
    }
    // calling the parent function to update
    const handleAdd =()=>{
      AddNewExpense(amount,
          category,
          subcategory,
          date)
    }

  return (
    <div>
      <div>AddExpense</div>
      <div>

      <input type="number" placeholder="Enter the Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
      <select onChange={(e)=>setCategory(e.target.value)} >
        {CATEGORY?.map((item)=>{
          return(<option key={item} value={item}>{item}</option>)
        })}      
      </select>

      <select onChange={(e)=>setSubcategory(e.target.value)}>
        {SUBCATEGORY[category]?.map((item)=>{
          return(<option key={item} value={item}>{item}</option>)
        })}
      </select>
      <input type="text" placeholder="Notes"></input>
      <input type="date" max={maxDate()} value={date} onChange={(e)=>setDate(e.target.value)}></input>
      <button onClick={handleAdd}>Add Expense</button>
      </div>

    </div>
  )
}

export default AddExpense