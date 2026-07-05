const Dashboard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Dashboard
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {/* Balance */}
        <div className="col-span-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium opacity-90">Balance</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-2">₹25,000</h3>
          <p className="text-xs mt-2 opacity-80">Available after expenses</p>
        </div>

        {/* Total Spend */}
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium text-rose-700">Total Spend</p>
          <h3 className="text-xl md:text-2xl font-bold text-rose-800 mt-2">
            ₹18,500
          </h3>
          <p className="text-xs text-rose-600 mt-2">Spent this month</p>
        </div>

        {/* Savings */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium text-blue-700">Savings</p>
          <h3 className="text-xl md:text-2xl font-bold text-blue-800 mt-2">
            ₹6,500
          </h3>
          <p className="text-xs text-blue-600 mt-2">Set aside this month</p>
        </div>

        {/* Need */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium text-amber-700">Need</p>
          <h3 className="text-xl md:text-2xl font-bold text-amber-800 mt-2">
            ₹12,000
          </h3>
          <p className="text-xs text-amber-600 mt-2">Essentials</p>
        </div>

        {/* Want */}
        <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm font-medium text-fuchsia-700">Want</p>
          <h3 className="text-xl md:text-2xl font-bold text-fuchsia-800 mt-2">
            ₹4,000
          </h3>
          <p className="text-xs text-fuchsia-600 mt-2">Non-essential spends</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;