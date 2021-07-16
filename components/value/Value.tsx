import surfeurIcon from "../../public/Images/surfeur.svg";
import yangIcon from "../../public/Images/yang.svg";
import peaceIcon from "../../public/Images/peace.svg";
import Image from "next/image";

const valueTeam = {
  titleteam: "La Team Surfcamp.fr",
  textteam:
    "Notre équipe est constituée de surfeurs amateurs et professionnels. Une bande de copains originaires du Sud-Ouest de la France qui ont grandit dans les vagues, se sont laissés rôtir au soleil et grignoté par le sel. Mais bon sang, qu’est-ce qu’on adore ça !",
  titlevalue: "Nos valeurs",
  textvalue:
    "Chez surfcamp.fr, nous essayons de transmettre les valeurs qui nous sont propres et chères. Le développement de notre plateforme doit impérativement se faire dans les respects des principes suivants : Le respect de l’homme en tant qu’être humain, la pratique responsable et raisonnable vis à vis de l’écologie et Le sport et le découverte de soi",
  titlecontact: "Amis surfeurs, contactez-nous !",
  textcontact:
    "Parce que nous sommes en constante recherche de l’amélioration de nos services, de qualité d’article et de véracité d’informations, n’hésitez pas à nous contacter dans le cas où vous voudriez nous faire un retour d’expérience !",
};

function Value(): JSX.Element {
  return (
    <div className="flex flex-col p-10 bg-gray-200 sm:flex-row ">
      <div className="sm:w-1/3 sm:mx-4">
        <div className="hidden sm:flex sm:justify-center">
          <Image
            src={surfeurIcon}
            alt="surfeur logo"
            className="sm:flex sm:flex-col sm:justify-center"
          />
        </div>
        <h2 className="flex justify-start py-4 text-xl text-BlueCamp justify-center ">
          {valueTeam.titleteam}
        </h2>
        <p className="flex text-gray-500  text-center">{valueTeam.textteam}</p>
      </div>
      <div className="sm:w-1/3 sm:mx-4">
        <div className="hidden sm:flex sm:justify-center">
          <Image
            src={yangIcon}
            alt="surfeur logo"
            className="sm:flex sm:flex-col sm:justify-center "
          />
        </div>
        <h2 className="flex py-4 text-xl text-center text-BlueCamp justify-center">
          {valueTeam.titlevalue}
        </h2>
        <p className="flex text-gray-500 text-center">{valueTeam.textvalue}</p>
      </div>
      <div className="sm:w-1/3 sm:mx-4">
        <div className="hidden sm:flex sm:justify-center">
          <Image
            src={peaceIcon}
            alt="surfeur logo"
            className="sm:flex sm:flex-col sm:justify-center"
          />
        </div>
        <h2 className="flex py-4 text-xl text-BlueCamp justify-center text-center">
          {valueTeam.titlecontact}
        </h2>
        <p className="flex text-center text-gray-500 ">
          {valueTeam.textcontact}
        </p>
      </div>
    </div>
  );
}

export default Value;
