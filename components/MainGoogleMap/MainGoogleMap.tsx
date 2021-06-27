import React from "react";

export default function MainGoogleMap(): JSX.Element {
  return (
    <div>
      <section className="hidden sm:block p-10 text-xs sm:text-base ">
        <h2 className="flex justify-center pb-4 text-xl text-gray-600">
          {`Votre surf camp en parcourant le monde !`}
        </h2>
        <p className="flex text-center p-4 text-gray-600">
          {` Découvrez l'expérience surf qui vous convient en recherchant une
          destination par ville, parmi les meilleurs spots au monde ! Pour
          chaque ville, retrouvez toutes les infos sur le spot de surf de vos
          rêves avant de partir !`}
        </p>
        <p>{`-Map Google-`}</p>
      </section>
    </div>
  );
}
