import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-screen  bg-cover bg-center bg-[url(https://imgs.search.brave.com/mgoqqIK269qqGhT-tHaSeCLVwQQ8muO3XaWPjVng2Kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzI0LzI3LzAz/LzM2MF9GXzYyNDI3/MDM3MF9FVnJjMkhk/MjE4Uzd6Y2J3TVgx/aTVsc080eUpXc3Ez/MS5qcGc)]  flex  justify-between flex-col w-full bg-red-400">
      <h1 className="text-3xl ml-14 px-4 py-4 h-10 font-extrabold hover:text-5xl hover:text-white hover:cursor-pointer">
        QuickCab
      </h1>
      <div className=" px- 5 pb-8 bg-white">
        <h2>Started With Quick cab</h2>
        <Link
          to="/userlogin"
          className=" flex items-center justify-center w-full mt-2  bg-black text-gray-200 py-3 rounded"
        >
          continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
