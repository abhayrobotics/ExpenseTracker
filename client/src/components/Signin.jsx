import { useState } from "react";
import { loginRequest } from "../services/expenseServices";
const Signin =({signInStatus})=>{

    const [email,setEmail] =useState("")
    const [password,setPassword] = useState("")

    const submitHandler = async()=>{
        try{

            const isLogin = await loginRequest(email,password);
            
            // if login fails
            if(isLogin.token){
                console.log("signin Success")
                signInStatus(true)
                localStorage.setItem("token",isLogin.token)

            }else{
                console.log(isLogin)

            }
        
        }catch(e){
            console.log(e)
        }

    }
    return (
        <div className="flex flex-col justify-center items-center">
        <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your Email"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
        <button onClick={submitHandler} >Submit</button>
        </div>
    )
}

export default Signin;