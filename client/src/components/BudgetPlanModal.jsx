import {
  Wallet,
  ShoppingCart,
  Sparkles,
  PiggyBank,
  X,
} from "lucide-react";

const BudgetPlanModal = ({ setShowBudget }) => {

  const DASHBOARD_CARDS = [
    {
      Icon: ShoppingCart,
      title: "Grocery",
      color: "green",
      desc: "Maximum monthly expense",
      value: ""
    },
    {
      Icon: Sparkles,
      title: "LifeStyle",
      color: "yellow",
      desc: "Maximum monthly expense",
      value: ""
    },
    {
      Icon: PiggyBank,
      title: "Savings",
      color: "blue",
      desc: "Minimum amount you must save monthly ",
      value: ""
    },

  ]


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <Wallet size={24} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Create Budget Plan
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Set your spending limits and savings target.
                </p>
              </div>
            </div>

            <button onClick={() => setShowBudget(false)} className="rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className=" px-6 py-1">

          {/* Starting amount */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Starting Amount
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 bg-gray-50 px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
              <span className="text-lg font-semibold text-gray-400">
                ₹
              </span>

              <input
                type="number"
                placeholder="5,000"
                className="w-full bg-transparent px-3 py-1 text-lg font-medium text-gray-800 outline-none"
              />
            </div>

            <p className="mt-1 mb-2 text-xs text-gray-400">
              Amount available for this budget period.
            </p>
          </div>

          {/* Limits */}
          <div>
            <div className="mb-3">
              <h3 className="font-semibold text-gray-800">
                Spending limits and Savings target.
              </h3>


            </div>

            <div className="space-y-3">
              {DASHBOARD_CARDS?.map((item) => {
                const IconDiv = item.Icon
                return (
                  <>
                    <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-2 transition hover:border-purple-200 hover:bg-purple-50/30">
                      <div className={`rounded-lg bg-${item.color}-100 p-2 text-${item.color}-600`}>
                        <IconDiv size={21} />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.desc}
                        </p>
                      </div>

                      <div className="flex w-32 items-center rounded-lg border border-gray-300 bg-white px-3">
                        <span className="text-sm text-gray-400">₹</span>
                        <input
                          type="number"
                          placeholder="3,000"
                          className="w-full bg-transparent px-2 py-2 text-right text-sm outline-none"
                        />
                      </div>
                    </div>
                  </>
                )
              })}

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-gray-200 bg-gray-50 px-6 py-1">
          <button onClick={() => setShowBudget(false)} className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
            Cancel
          </button>

          <button className="flex-1 rounded-xl bg-purple-600 px-3 py-2 font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700 active:scale-[0.98]">
            Create Budget Plan
          </button>
        </div>

      </div>
    </div>
  );
};

export default BudgetPlanModal;