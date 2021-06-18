export default function PropertyForm(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-96 h-4/6 bg-blue-800 flex flex-col justify-center items-center rounded-lg">
        <form className="flex flex-col  p-2 ">
          <h2 className="text-white w-full  text-2xl">Devenir hôte</h2>
          <label className="p-2 text-white" htmlFor="propertyName">
            Nom
          </label>
          <input
            className="rounded-lg w-full h-8 px-1"
            type="text"
            id="propertyName"
          />
          <label className="p-2 text-white" htmlFor="propertyPrice">
            Prix/nuit
          </label>
          <input
            className="rounded-lg w-full h-8 px-1"
            type="text"
            id="propertyPrice"
          />
          <label className="p-2 text-white" htmlFor="propertyType">
            Type
          </label>
          <input
            className="rounded-lg w-full h-8 px-1"
            type="text"
            id="propertyType"
          />
          <label className="p-2 text-white" htmlFor="propertyDescription">
            Description
          </label>
          <textarea
            className="rounded-lg w-full"
            id="propertyDescription"
          ></textarea>
          <button
            className="p-2 mt-7 text-white border border-white rounded-lg"
            type="submit"
          >
            Poster un bien
          </button>
        </form>
      </div>
    </div>
  );
}
