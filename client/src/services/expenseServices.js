import { BASE_URL } from "../storage/constant"


// fetch all expenses from DB
export const fetchExpenses = async () => {
  try {
    const response = await fetch(BASE_URL + "/expenses")
    return await response.json()
    // console.log(result)

  }
  catch (e) {
    console.log(e)
  }

}

// create, send data to DB
export const createExpense = async (data,token) => {
  try {

    const response = await fetch(BASE_URL + "/expenses", {
      method: "POST",
     
      headers: {
         Authorization: `Bearer ${token}`,
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

// Delete requesto with ID
export const deleteExpense = async (id) => {
  console.log(id)
  try {

    const response = await fetch(BASE_URL + "/expenses/" + id, {
      method: "DELETE"
    })
    return await response.json()


  }
  catch (e) {
    console.log(e)
  }
}

// Update request with id and updatedExpense
export const updateExpense = async (id,updatedExpense) => {
  try {
    const response = await fetch(BASE_URL + "/expenses/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedExpense)
    })


    if (!response.ok) {
      throw new Error("Failed to update expense");
    }

    return await response.json();
  }
  catch (e) {
    console.log(e)
  }

}

export const loginRequest = async (email,password )=>{

    const payload = {
      email,
      passwords
    }

    try{
      const checkLogin  = fetch(BASE_URL+"/signin", {
        method:"POST",
        headers :{
           "Content-Type": "application/json",
        },
        body: payload

      })

      return checkLogin
    }
    catch(e){
      console.log(e)
    }
}