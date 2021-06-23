import { useState } from "react";

export default function Filter(): JSX.Element {
  const [isDislay, setIsDisplay] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleDisplay = () => {
    setIsDisplay(!isDislay);
  };

  const aldultMore = () => {
    event?.preventDefault();
    setAdultCount((adultCount) => adultCount + 1);
  };

  const aldultLess = () => {
    event?.preventDefault();
    setAdultCount((adultCount) => adultCount - 1);
  };

  const childMore = () => {
    event?.preventDefault();
    setChildCount((childCount) => childCount + 1);
  };

  const childLess = () => {
    event?.preventDefault();
    setChildCount((childCount) => childCount - 1);
  };

  return (
    <>
      <button className="py-2 px-3" onClick={handleDisplay}>
        filters
      </button>
      {/* Nombre de voyageurl */}
      {isDislay && (
        <div className="w-1/2 border rounded-lg border-black flex justify-around">
          <div className="w-1/4 flex justify-center p-4">
            <form className="w-full">
              <h2 className="text-center ">Voyageur</h2>
              <div className=" w-full h-full flex flex-col mt-4">
                <div className="w-full flex justify-between my-4">
                  <p className="text-sm flex justify-center items-center">
                    Adulte(s)
                  </p>
                  <div className="flex">
                    <button
                      className="border rounded-l-lg px-1 focus:outline-none"
                      onClick={aldultLess}
                    >
                      -
                    </button>
                    <p className="text-sm border-t border-b px-2 flex justify-center items-center">
                      {adultCount}
                    </p>
                    <button
                      className="border rounded-r-lg px-1 focus:outline-none"
                      onClick={aldultMore}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-full flex justify-between mb-4">
                  <p className="text-sm flex justify-center items-center">
                    Enfant(s)
                  </p>
                  <div className="flex">
                    <button
                      className="border rounded-l-lg px-1 focus:outline-none"
                      onClick={childLess}
                    >
                      -
                    </button>
                    <p className="text-sm border-t border-b px-2 flex justify-center items-center">
                      {childCount}
                    </p>
                    <button
                      className="border rounded-r-lg px-1 focus:outline-none"
                      onClick={childMore}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* fin du nombre de voyageur */}
          {/* ****** */}
          {/* fourchette de prix */}
          <div className="h-40 my-auto w-0 border border-black"></div>
          <div className="w-1/4 flex p-4 ">
            <form className="w-full flex flex-col text-xs">
              <h2 className="pb-4 text-lg text-center">Prix</h2>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="CBPrice1">
                  50-100€
                </label>
                <input type="checkbox" id="CBPrice1" value="50-100" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="CBPrice2">
                  100-200€
                </label>
                <input type="checkbox" id="CBPrice2" value="100-200" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="CBPrice3">
                  200-500€
                </label>
                <input type="checkbox" id="CBPrice3" value="200-500" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="CBPrice4">
                  500-1000€
                </label>
                <input type="checkbox" id="CBPrice4" value="500-1000" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="CBPrice5">
                  1000+€
                </label>
                <input type="checkbox" id="CBPrice5" value="1000" />
              </div>
            </form>
          </div>
          {/* fin de la fourchette de prix */}
          {/* ******** */}
          {/* distance de la plage */}
          <div className="h-40 my-auto w-0 border border-black"></div>
          <div className="w-1/4 flex justify-center p-4">
            <form className="w-full flex flex-col text-xs">
              <h2 className="pb-4 text-lg text-center">{`Dist' plages`}</h2>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="distBeach1">
                  front de mer
                </label>
                <input type="checkbox" id="distBeach1" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="distBeach2">
                  1 km
                </label>
                <input type="checkbox" id="distBeach2" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="distBeach3">
                  1 - 5 km
                </label>
                <input type="checkbox" id="distBeach3" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="distBeach4">
                  5 - 10 km
                </label>
                <input type="checkbox" id="distBeach4" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="distBeach5">
                  10 km +
                </label>
                <input type="checkbox" id="distBeach5" />
              </div>
            </form>
          </div>
          {/* fin de la distance de la plage */}
          {/* ********* */}
          {/* dans un rayon de  */}
          <div className="h-40 my-auto w-0 border border-black"></div>
          <div className="w-1/4 flex justify-center p-4">
            <form className="w-full flex flex-col text-xs">
              <h2 className="pb-4 text-lg text-center">Dans un rayon de </h2>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="aroundDist1">
                  1 km
                </label>
                <input type="checkbox" id="aroundDist1" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="aroundDist2">
                  1 - 5km
                </label>
                <input type="checkbox" id="aroundDist2" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="aroundDist3">
                  5 - 10 km
                </label>
                <input type="checkbox" id="aroundDist3" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="aroundDist4">
                  10 - 20 km
                </label>
                <input type="checkbox" id="aroundDist4" />
              </div>
              <div className="flex flex-row justify-between py-1 w-full">
                <label className="w-full" htmlFor="aroundDist5">
                  20 km +
                </label>
                <input type="checkbox" id="aroundDist5" />
              </div>
            </form>
          </div>
        </div>
        // fin dans un rayon de
      )}
    </>
  );
}
