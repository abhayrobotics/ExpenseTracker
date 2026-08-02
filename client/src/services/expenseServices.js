import { BASE_URL } from "../storage/constant"


// fetch all expenses from DB
export const fetchExpenses = async (token) => {
  try {
    console.log(token)
    const response = await fetch(BASE_URL + "/expenses",{
      method: "GET",
      
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
    
  )
  console.log(response.status)
    const result = await response.json()
    console.log(result)
    return result

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
export const deleteExpense = async (id,token) => {
  console.log(id)
  try {

    const response = await fetch(BASE_URL + "/expenses/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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
// Signin attempt and validation from server
export const loginRequest = async (email,password )=>{

    const payload = {
      email,
      password
    }

    try{
      const checkLogin  = await fetch(BASE_URL+"/signin", {
        method:"POST",
        headers :{
           "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)

      })
      
      const result = await checkLogin.json();
      console.log(result)
      return result;
    }
    catch(e){
      console.log(e)
    }
}