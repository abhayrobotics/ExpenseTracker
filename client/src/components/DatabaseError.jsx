import { Database, RefreshCw, ArrowLeft } from "lucide-react";

const DatabaseError = ({ retryAction }) => {

  
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-content">
      <div className="w-full max-w-lg text-center">

        {/* Icon */}
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />

          <div className="relative rounded-2xl border border-outline bg-surface p-6 shadow-xl">
            <Database
              size={48}
              strokeWidth={1.5}
              className="text-primary"
            />

            <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-red-500 text-sm font-bold text-white">
              !
            </span>
          </div>
        </div>

        {/* Small heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Data unavailable
        </p>

        {/* Main heading */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          We couldn't load your data
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md leading-7 text-muted">
          We're having trouble connecting to the database right now.
          Your data hasn't necessarily been lost. Please try again in a
          moment.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={retryAction}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-background shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          {/* <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline bg-surface px-6 py-3 font-semibold transition hover:border-primary/40 hover:bg-primary/5"
          >
            <ArrowLeft size={18} />
            Go Back
          </button> */}
        </div>

        {/* Status */}
        <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-2 rounded-xl border border-outline bg-surface/60 px-4 py-3 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Database connection unavailable
        </div>

      </div>
    </main>
  );
};

export default DatabaseError;