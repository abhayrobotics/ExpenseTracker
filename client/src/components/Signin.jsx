import { useState } from "react";
import { loginRequest, signUpRequest } from "../services/expenseServices";
import { Wallet } from "lucide-react";
import { BASE_URL } from "../storage/constant";
import LoadingSpinner from "./ui/LoadingSpinner";

const Signin = ({ signInStatus }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showSignin, setShowSignin] = useState(true)
    const [loading, setLoading] = useState(false)
    const [message,setMessage] =useState("")

    const signInHandler = async () => {
        setLoading(true)
        try {
             setMessage("")
            const isLogin = await loginRequest(email, password);

            if (isLogin.token) {
                console.log("signin Success");
                signInStatus(true);
                localStorage.setItem("token", isLogin.token);
            } else {
                console.log(isLogin);
                setLoading(false)
                setMessage(isLogin?.message)
                
            }
        } catch (e) {
            console.log(e);
        }
    };

    const SignUpHandler = async () => {
        try {
            console.log("signup try")
            const result = await signUpRequest(name, email, password);

            console.log(result)
        }
        catch (e) {

        }

    }

    return (
        <div className="h-dvh overflow-hidden flex items-center justify-center bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">

                {/* Title */}
                <div className="text-center mb-2">
                    <div className="flex justify-center mb-2">
                        <div className="bg-purple-100 p-4 rounded-full">
                            <Wallet size={40} className="text-purple-700" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-purple-700">
                        Expense Tracker
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Sign in to manage your expenses
                    </p>
                </div>
                {/* name */}
                {showSignin ? <></> :
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                        />
                    </div>
                }
                {/* Email */}
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>

                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                </div>

                {/* Button */}
                {showSignin ?
                    <button
                        onClick={signInHandler}
                        className="w-full bg-purple-600 hover:bg-purple-700 hover:cursor-pointer active:scale-[0.98] transition text-white font-semibold py-3 rounded-xl shadow-lg"
                    >
                        {loading ? 
                           "Signing in ..."
                             : "Sign In"}

            </button> :

            <button
                onClick={SignUpHandler}
                className="w-full bg-purple-600 hover:bg-purple-700 hover:cursor-pointer active:scale-[0.98] transition text-white font-semibold py-3 rounded-xl shadow-lg"
            >
                Sign Up
            </button>
                }
            {loading ? <LoadingSpinner /> : ""}

            <div className="text-red-500 text-center">{message}</div>
            <div className="mt-6 text-center text-gray-600">
                <span>Don't have an account? </span>

                <button
                    className="text-purple-700 font-semibold hover:underline" onClick={() => setShowSignin(!showSignin)}
                >
                    {showSignin ? "Sign Up" : "Sign In"}
                </button>
            </div>
        </div>
        </div >
    );
};

export default Signin;