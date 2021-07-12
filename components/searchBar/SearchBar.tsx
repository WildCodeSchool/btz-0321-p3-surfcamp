import router from "next/router";
import { useState } from "react";

export default function SearchBar(): JSX.Element {
  const [keyWord, setKeyWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/searchResults/?city=${keyWord}`);
  };

  return (
    <div
      className={`flex h-10  mx-auto items-center my-auto justify-between border text-xs  bg-white rounded-lg`}
    >
      <form
        className=" h-full flex justify-between items-center"
        onSubmit={handleSubmit}
      >
        <div className=" flex ">
          <input
            className="  rounded-l-lg focus:outline-none font-bold text-gray-400 text-center text-md md:text-base px-10"
            type="text"
            placeholder="Destination"
            onChange={(e) => setKeyWord(e.target.value)}
          />
        </div>
        <div className=" h-full">
          <button
            type="submit"
            className="h-full w-full px-4 bg-BlueCamp text-white rounded-r-lg focus:outline-none font-bold md:text-sm text-sm"
          >
            Rechercher
          </button>
        </div>
      </form>
    </div>
  );
}
