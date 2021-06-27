import { useState, useEffect, useCallback } from "react";
import SliderMobile from "../slider/sliderMobile";
import SliderDesktop from "../slider/sliderDesktop";

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);
  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  useEffect(() => {
    const media = window.matchMedia(`(max-width :${width}px)`);
    media.addListener(updateTarget);
    if (media.matches) {
      setTargetReached(true);
    }
    return () => media.removeListener(updateTarget);
  }, []);
  return targetReached;
};

export default function CarrousselCity(): JSX.Element {
  const isBreakingpoint = useMediaQuery(375);

  return (
    <div>
      <section className="bg-BlueCamp text-white p-10 text-xs sm:text-base">
        <h2 className="flex justify-center pb-4 text-xl">
          {`          Votre surf camp par ville
`}{" "}
        </h2>
        <p className="flex text-center p-4">
          {`  Découvrez l'expérience surf qui vous convient en recherchant une
          destination par ville, parmi les meilleurs spots au monde ! Pour
          chaque ville, retrouvez toutes les infos sur le spot de surf de vos
          rêves avant de partir !`}
        </p>
        {isBreakingpoint ? <SliderMobile /> : <SliderDesktop />}
      </section>
    </div>
  );
}
