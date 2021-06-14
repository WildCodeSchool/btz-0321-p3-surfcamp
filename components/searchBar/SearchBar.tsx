export default function SearchBar() {
  const mediumSc = "md:w-2/5 md:mx-auto";
  const desktop = "lg:w-2/5 lg:mx-auto";

  return (
    <div
      className={`flex flex-row  h-14 w-full mx-2 items-center my-auto justify-between text-xs  bg-white rounded-md ${mediumSc} ${desktop}`}
    >
      <div className="flex justify-center ml-3">
        <p>Localité</p>
      </div>
      <div>
        <p>|</p>
      </div>
      <div>
        <p>Jour d'arrivée</p>
      </div>
      <div>
        <p>|</p>
      </div>
      <div>
        <p>Jour de depart</p>
      </div>
      <div className="flex  bg-BlueCamp w-1/5 h-full justify-center items-center   text-white rounded-r-md ">
        <p>SEARCH</p>
      </div>
    </div>
  );
}
