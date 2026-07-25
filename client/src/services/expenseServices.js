import { BASE_URL } from "../storage/constant"


// fetch all expenses from DB
export const fetchExpenses = async () => {
    try {
      const response = await fetch(BASE_URL + "/expenses")
      return await response.json()
      console.log(result)
     
    }
    catch (e) {
      console.log(e)
    }

  }

