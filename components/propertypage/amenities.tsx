import wetsuit from "../../public/images/wetsuit.svg";
import surfboard from "../../public/images/surfboard.svg";
import shower from "../../public/images/shower.svg";
import Party from "../../public/images/party.svg";
import noPartyAllowed from "../../public/images/noparty.svg";
import noPetAllowed from "../../public/images/noPets.svg";
import Wc from "@material-ui/icons/WcOutlined";
import Bathtub from "@material-ui/icons/BathtubOutlined";
import Kitchen from "@material-ui/icons/KitchenOutlined";
import Laundry from "@material-ui/icons/LocalLaundryServiceOutlined";
import Wifi from "@material-ui/icons/WifiOutlined";
import Restaurant from "@material-ui/icons/RestaurantMenuOutlined";
import Bike from "@material-ui/icons/DirectionsBikeOutlined";
import NoSmoke from "@material-ui/icons/SmokeFree";
import Smoking from "@material-ui/icons/SmokingRooms";
import PetsIcon from "@material-ui/icons/Pets";
import HomeIcon from "@material-ui/icons/Home";
import Star from "@material-ui/icons/StarOutline";
import List from "@material-ui/icons/ListAlt";
import Done from "@material-ui/icons/Done";
import Image from "next/image";
import { Feature } from "../../interfaces";
import { useState } from "react";
import { useEffect } from "react";

interface IProps {
  features: Feature[];
}

export default function Amenities({ features }: IProps): JSX.Element {
  const [featuresState, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    setFeatures(features.map((ft) => ft.label));
  }, []);

  return (
    <div>
      <section className="AMENITIES--------------------------------">
        <div className="flex mt-12 justify-between">
          <div className="flex flex-col space-y-5 text-sm text-justify">
            <div className="flex space-x-4">
              <HomeIcon />

              <p className="w-11/12">
                Logement entier Vous aurez le logement (appartement) rien que
                pour vous.
              </p>
            </div>
            <div className="flex space-x-4">
              <Done />
              <p className="w-11/12">
                Nettoyage renforcé Cet hôte s&apos;engage à appliquer le
                processus de nettoyage renforcé en 5 étapes d&apos;SurfCamp. En
                voir plus
              </p>
            </div>
            <div className="flex space-x-4">
              <Star />
              <p className="w-11/12">
                Un hôte expérimenté SurfCamp Anglet dispose est un membre
                certifié de nôtre communauté
              </p>
            </div>
            <div className="flex space-x-4">
              <Kitchen />
              <p className="w-11/12">
                Équipements du quotidien L&apos;hôte a équipé ce logement pour
                les séjours longue durée. Les équipements suivants sont inclus :
                cuisine, parking gratuit et chauffage.
              </p>
            </div>
            <div className="flex space-x-4">
              <List />
              <p className="w-11/12">
                Règlement intérieur L&apos;hôte n&apos;autorise pas les animaux
                de compagnie ou les fêtes, et le logement est non-fumeur. En
                voir plus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="EQUIPMENT--------------------------------">
        <div className="w-full  flex-col sm:flex-row justify-around mt-10">
          <div className="flex flex-col space-y-6  ">
            <span className="text-base font-bold">À savoir</span>

            <div className="flex flex-col flex-wrap justify-between space-y-2 ">
              {featuresState.map((ft) => {
                if (ft === "WIFI") {
                  return (
                    <div className="flex flex-row">
                      <Wifi />
                      <p className="">Wifi</p>
                    </div>
                  );
                }
                if (ft === "SHOWER") {
                  return (
                    <div className="flex flex-row">
                      <Image
                        src={shower}
                        alt="house"
                        width={30}
                        height={30}
                        className=""
                      />
                      <p className="">Douche{}</p>
                    </div>
                  );
                }
                if (ft === "BATH") {
                  return (
                    <div className="flex flex-row">
                      <Bathtub />
                      <p className="">Baignore</p>
                    </div>
                  );
                }
                if (ft === "KITCHEN") {
                  return (
                    <div className="flex flex-row">
                      <Kitchen />
                      <p className="">Cuisine</p>
                    </div>
                  );
                }
                if (ft === "LAUNDRY") {
                  return (
                    <div className="flex flex-row ">
                      <Laundry />
                      <p className="">Machine a laver</p>
                    </div>
                  );
                }
                if (ft === "WC") {
                  return (
                    <div className="flex flex-row">
                      <Wc />
                      <p className="">Wc</p>
                    </div>
                  );
                }
                if (ft === "SURFBOARDS") {
                  return (
                    <div className="flex flex-row ">
                      <Image
                        src={surfboard}
                        alt="house"
                        width={30}
                        height={30}
                        className=""
                      />
                      <p className="">Surfboard</p>
                    </div>
                  );
                }
                if (ft === "SURFSUIT") {
                  return (
                    <div className="flex flex-row">
                      <Image
                        src={wetsuit}
                        alt="house"
                        width={30}
                        height={30}
                        className=""
                      />
                      <p className="">Combi de surf</p>
                    </div>
                  );
                }
                if (ft === "RESTAURANT") {
                  return (
                    <div className="flex flex-row">
                      <Restaurant />
                      <p className="">Restaurant</p>
                    </div>
                  );
                }
                if (ft === "BICYCLE") {
                  return (
                    <div className="flex flex-row">
                      <Bike />
                      <p className="">Vélos</p>
                    </div>
                  );
                }

                if (ft === "PETALLOWED") {
                  return (
                    <div className="flex space-x-4">
                      <PetsIcon />
                      <p className="w-11/12">Animaux Bienvenus</p>
                    </div>
                  );
                }
                if (ft === "NOPETALLOWED") {
                  return (
                    <div className="flex space-x-4">
                      <Image
                        src={noPetAllowed}
                        alt="house"
                        width={30}
                        height={30}
                        className=""
                      />
                      <p className="w-11/12">Pas d&apos;animaux</p>
                    </div>
                  );
                }
                if (ft === "SMOKING") {
                  return (
                    <div className="flex space-x-4">
                      <Smoking />
                      <p className="w-11/12">Chambre fumeur</p>
                    </div>
                  );
                }
                if (ft === "NOSMOKING") {
                  return (
                    <div className="flex space-x-4">
                      <NoSmoke />
                      <p className="w-11/12">Non fumeur</p>
                    </div>
                  );
                }
                if (ft === "PARTY") {
                  return (
                    <div className="flex space-x-4">
                      <Image
                        src={Party}
                        alt="house"
                        width={30}
                        height={30}
                        className=""
                      />
                      <p className="w-11/12">Fêtes acceptées </p>
                    </div>
                  );
                }
                if (ft === "NOPARTY") {
                  return (
                    <div className="flex space-x-4">
                      <Image
                        src={noPartyAllowed}
                        alt="house"
                        width={30}
                        height={30}
                        className=""
                      />
                      <p className="w-11/12">Pas de fête </p>
                    </div>
                  );
                }
                if (ft === "OTHER") {
                  return (
                    <div className="flex flex-row">
                      <p className="">Autres...</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
