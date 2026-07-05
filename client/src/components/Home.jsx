import Dashboard from "./Dashboard"
import ExpenseList from "./ExpenseList"

const Home = () => {
  return (
    <div className="w-full  border m-auto p-2 overflow-hidden">
        <Dashboard />
        <div className="fixed bottom-53 right-6 p-2 text-nowrap  max-w-11 hover:max-w-64 transition-[max-width] duration-1000 ease-in-out overflow-hidden  bg-white hover: text-purple-600 bold text-lg  rounded-4xl border-3 border-purple-700 cursor-pointer ">  ➕ Add Expense </div>
        <ExpenseList />
    </div>
  )
}

export default Home