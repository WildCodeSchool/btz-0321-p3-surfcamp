import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const mediumSc = "md:w-2/5 md:mx-auto";
  const desktop = "lg:w-2/5 lg:mx-auto";

  console.log(startDate, endDate);
  

  return (
    <div
      className={`flex h-14 w-11/12 mx-auto items-center my-auto justify-between text-xs  bg-white rounded-lg ${mediumSc} ${desktop}`}
    >
      <form className="w-full h-full flex justify-between items-center">
        <div className="w-1/4 flex ">
          <input
            className="w-full  rounded-l-lg focus:outline-none text-center"
            type="text"
            placeholder="Destination"
          />
        </div>
        <div className="w-1/4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            value={startDate}
            className={`w-full h-10 my-auto text-center border-l border-gray-400 focus:outline-none
            ${startDate ? "text-black" : "text-gray-400"}
            `}
            placeholderText="Arrivée"
            dateFormat='dd/MM/yyy'
            minDate={new Date()}
          />
        </div>
        <div className="w-1/4 text-center">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            value={endDate}
            className={`w-full h-10 text-center border-l border-gray-400 focus:outline-none
            ${endDate ? "text-black" : "text-gray-400"}
            `} 
            placeholderText="Départ"
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
          />
        </div>
        <div className="w-1/4 h-full">
          <button className="h-full w-full bg-BlueCamp text-white rounded-r-lg focus:outline-none font-bold text-lg">
            Rechercher
          </button>
        </div>
      </form>
    </div>
  );
}
