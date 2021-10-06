import React from "react";

const Header = ({ icon, title, borderColor, setTop }) => {
  return (
    <div
      className={`sticky z-10 top-0 flex flex-row justify-center font-semibold p-3 border-t-8 bg-white ${borderColor} shadow-md`}
    >
      <div className="ml-1 mr-auto flex flex-row">
        <img src={icon} alt="logo" className="h-6 w-6 m-1 mr-2" />
        <h1 className="text-center text-2xl">{title}</h1>
      </div>

      {/* Button Group */}
      <div className="inline-flex shadow-sm rounded-md" role="group">
        <button
          type="button"
          class="rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => {
            if (setTop !== undefined) setTop(1);
          }}
        >
          Today
        </button>

        <button
          type="button"
          class="border-t border-b border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => {
            if (setTop !== undefined) setTop(3);
          }}
        >
          3 Days
        </button>

        <button
          type="button"
          class="rounded-r-md border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => {
            if (setTop !== undefined) setTop(7);
          }}
        >
          Week
        </button>
      </div>
    </div>
  );
};

export default Header;
