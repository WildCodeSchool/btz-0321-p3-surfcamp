import Image from "next/image";
import MyButton from "../components/button/MyButton";
import LogoSurfCamp from "../public/images/logosurfcamp.svg";

function Host(): JSX.Element {
  const yesButton = {
    inputbutton: "OUI",
  };
  const noButton = {
    inputbutton: "NON",
  };
  return (
    <div className=" text-BlueCamp h-full px-5 md:px-20 lg:px-64">
      <section className="flex flex-row items-center justify-center">
        <div className="mt-20">
          <h2>Devenir Hôte :</h2>
        </div>
        <div className="mt-20 mx-3">
          <Image src={LogoSurfCamp} alt="" width={150} height={75} />
        </div>
      </section>
      <section className="flex flex-row items-center justify-center bg-BlueCamp my-3 p-3 rounded-xl">
        <div className="text-white">
          <p>Quel type de logement proposez-vous ?</p>
        </div>
        <div className="mx-3">
          <label>
            <select className="rounded-sm text-center">
              <option value="SURFCAMP">SURFCAMP</option>
              <option value="SURFSCHOOL">SURFSCHOOL</option>
              <option value="HOUSE">HOUSE</option>
            </select>
          </label>
        </div>
      </section>
      <section className="flex items-center my-3 p-3 rounded-xl border-2 border-gray-200">
        <div className="mx-3">
          <p>Le logement est-il disponible actuellement ?</p>
        </div>
        <div className="flex m-auto items-center">
          <MyButton {...yesButton} />
          <MyButton {...noButton} />
        </div>
      </section>
      <section className="flex flex-row items-center justify-center bg-BlueCamp my-3 p-3 rounded-xl">
        <div className="text-white">
          <p>Quelle est l’adresse de ce logement ?</p>
        </div>
        <div className="mx-3">
          <label>
            <input
              className="rounded-sm text-center"
              placeholder="votre addresse"
            />
          </label>
        </div>
      </section>
      <section className="flex flex-row items-center justify-center bg-BlueCamp my-3 p-3 rounded-xl">
        <div className="flex flex-col">
          <div className="text-white p-3">
            <h2>Parlez nous un peu de chez-vous :</h2>
          </div>
          <div className="flex flex-row p-3">
            <div className="text-white">
              <p>Donnez un nom à votre bien :</p>
            </div>
            <div className="mx-3">
              <label>
                <input
                  className="rounded-sm text-center"
                  placeholder="votre addresse"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row p-3">
            <div className="text-white">
              <p>Capacité de votre logement :</p>
            </div>
            <div className="mx-3">
              <label>
                <input
                  className="rounded-sm text-center"
                  placeholder="nombre de personnes"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row p-3">
            <div className="text-white">
              <p>Nombre de Chambres :</p>
            </div>
            <div className="mx-3">
              <label>
                <input
                  className="rounded-sm text-center"
                  placeholder="nombre de personnes"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row p-3">
            <div className="text-white">
              <p>Description :</p>
            </div>
            <div className="mx-3">
              <label>
                <input
                  className="rounded-sm text-center"
                  placeholder="nombre de personnes"
                />
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Host;
