import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar(): JSX.Element {
  const [startDate, setStartDate] = useState<Date | undefined | null>(null);
  const [endDate, setEndDate] = useState<Date | undefined | null>(new Date());

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div
      className={`flex h-10  mx-auto items-center my-auto justify-between border text-xs  bg-white rounded-lg`}
    >
      <form className=" h-full flex justify-between items-center">
        <div className=" flex ">
          <input
            className="  rounded-l-lg focus:outline-none font-bold text-gray-400 text-center text-md md:text-base"
            type="text"
            placeholder="Destination"
          />
        </div>
        <div className="px-4 flex flex-col">
          <DatePicker
            className="w-full text-center px-4  text-sm font-bold flex flex-col"
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            isClearable
            withPortal
            dateFormat="dd/MM/yyyy"
            placeholderText="Arrivée / Départ"
            minDate={new Date()}
          />
        </div>
        <div className=" h-full">
          <button className="h-full w-full px-4 bg-BlueCamp text-white rounded-r-lg focus:outline-none font-bold md:text-sm text-sm">
            Rechercher
          </button>
        </div>
      </form>
    </div>
  );
}
