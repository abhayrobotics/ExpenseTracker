import { useState } from "react"
import { CATEGORY } from "../storage/constant"
import {SUBCATEGORY } from "../storage/constant"

const AddExpense = () => {
  
  const [category,setCategory] = useState("Grocery")
  return (
    <div>
      <div>AddExpense</div>
      <div>

      <input type="number" placeholder="Enter the Amount"></input>
      <select onChange={(e)=>setCategory(e.target.value)} >
        {CATEGORY?.map((item)=>{
          return(<option key={item} value={item}>{item}</option>)
        })}      
      </select>

      <select>
        {SUBCATEGORY[category]?.map((item)=>{
          return(<option key={item} value={item}>{item}</option>)
        })}
      </select>
      <input type="text" placeholder="Notes"></input>
      </div>
    </div>
  )
}

export default AddExpense