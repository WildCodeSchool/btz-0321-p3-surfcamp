import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar(): JSX.Element {
  const [startDate, setStartDate] = useState<Date | undefined | null>(
    new Date()
  );
  const [endDate, setEndDate] = useState<Date | undefined | null>(new Date());

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const mediumSc = "md:w-4/5 md:mx-auto ";
  const desktop = "lg:w-3/5 lg:mx-auto ";

  return (
    <div className="backgroundSearchBar w-full h-screen flex ">
      <div
        className={`flex h-14 w-11/12 mx-auto items-center my-auto justify-between border text-xs  bg-white rounded-lg ${mediumSc} ${desktop}`}
      >
        <form className="w-full h-full flex justify-between items-center">
          <div className="w-2/6 flex ">
            <input
              className="w-full  rounded-l-lg focus:outline-none text-center text-md md:text-lg"
              type="text"
              placeholder="Destination"
            />
          </div>
          <div className="w-2/6 flex flex-col">
            <DatePicker
              className="w-full text-center h-14 text-xs flex flex-col"
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              withPortal
              dateFormat="dd/MM/yyyy"
              placeholderText="Arrivée / Départ"
              minDate={new Date()}
            />
          </div>
          <div className="w-1/3 h-full">
            <button className="h-full w-full bg-BlueCamp text-white rounded-r-lg focus:outline-none font-bold md:text-lg text-sm">
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
