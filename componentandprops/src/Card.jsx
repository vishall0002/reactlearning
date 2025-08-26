const Card = () => {
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between rounded-2xl border p-6 shadow-sm bg-blue-900 m-9 max-w-md">
        {/* Left: Title + Info */}
        <div className="flex-1">
          {/* Row: Title + Buttons */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white sm:text-2lg">
              Back-end Developer
            </h2>

            {/* Buttons inline with title */}
            <div className="flex space-x-1 ml-2">
              <button
                type="button"
                className="inline-flex items-center rounded-sm bg-white px-0.5 py-0.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 hover:bg-gray-10"
              >
                ✏️
              </button>

              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                👁️
              </button>

              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ✅
              </button>
            </div>
          </div>

          {/* Job details */}
          <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6 text-sm text-gray-300">
            <div className="mt-2 flex items-center">
              <span className="mr-1.5 size-5 shrink-0 text-gray-400">💼</span>
              Full-time
            </div>
            <div className="mt-2 flex items-center">
              <span className="mr-1.5 size-5 shrink-0 text-gray-400">🌍</span>
              Remote
            </div>
            <div className="mt-2 flex items-center">
              <span className="mr-1.5 size-5 shrink-0 text-gray-400">💰</span>
              $120k – $140k
            </div>
            <div className="mt-2 flex items-center">
              <span className="mr-1.5 size-5 shrink-0 text-gray-400">📅</span>
              Closing on January 9, 2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
