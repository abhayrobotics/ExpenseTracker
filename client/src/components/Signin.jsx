import { useState } from "react";
import { loginRequest } from "../services/expenseServices";
const Signin =()=>{

    const [email,setEmail] =useState("")
    const [password,setPassword] = useState("")

    const submitHandler = async()=>{
        const isLogin = await loginRequest(email,password);
        const userData = await isLogin.json();
        console.log(userData)
        localStorage.setItem("token",userData.token)

    }
    return (
        <>
        <input type="text"  value={email} onChange={(e)=>setEmail((prev)=> prev+ e.target.value)} placeholder="enter your Email"/>
        <input type="text" value={password} onChange={(e)=>setPassword((prev)=> prev + e.target.value)} placeholder="password"/>
        <button onClick={submitHandler} >Submit</button>
        </>
    )
}

export default Signin;