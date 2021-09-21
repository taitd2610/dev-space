import React from "react";

const Header = ({ icon, title, borderColor, setTop }) => {
  return (
    <div
      className={`sticky z-10 top-0 flex flex-row justify-center font-semibold p-3 border-t-8 bg-white ${borderColor}`}
    >
      <div className="ml-1 mr-auto flex flex-row">
        <img src={icon} alt="logo" className="h-6 w-6 m-1 mr-2" />
        <h1 className="text-center text-2xl">{title}</h1>
      </div>

      <div className="flex">
        <p
          className="mr-2 ml-auto  text-md py-1 bg-gray-700 text-white rounded px-2 cursor-pointer hover:bg-gray-800"
          onClick={() => {
            if (setTop !== undefined) setTop(1);
          }}
        >
          Today
        </p>
        <p
          className="mr-2 ml-auto  text-md py-1 bg-gray-700 text-white rounded px-2 cursor-pointer hover:bg-gray-800"
          onClick={() => {
            if (setTop !== undefined) setTop(3);
          }}
        >
          3 Days
        </p>
        <p
          className="mr-2 ml-auto  text-md py-1 bg-gray-700 text-white rounded px-2 cursor-pointer hover:bg-gray-800"
          onClick={() => {
            if (setTop !== undefined) setTop(7);
          }}
        >
          Week
        </p>
      </div>
    </div>
  );
};

export default Header;
