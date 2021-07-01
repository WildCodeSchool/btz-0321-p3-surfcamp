import React, { useState, useEffect, useCallback } from "react";
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

export default function CarrousselMain(): JSX.Element {
  const isBreakingpoint = useMediaQuery(375);
  return (
    <div>
      <section className="text-gray-600 p-10 text-xs sm:text-base">
        <h2 className="flex justify-center pb-4 text-xl">
          {`Votre surf camp par pays`}
        </h2>
        <p className="flex text-center p-4">
          {`   Recherchez votre surf camp dans les pays les plus réputés pour le surf
          ! Surf trip entre ami ou stage de surf en surf camp, retrouvez
          notamment le Maroc, le Portugal, le Costa Rica, l'Espagne, l'Indonésie
          et plein d'autres destinations surf !`}
        </p>
      </section>
      <section>
        {isBreakingpoint ? <SliderMobile /> : <SliderDesktop />}
      </section>
    </div>
  );
}
