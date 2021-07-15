import wetsuit from "../../public/Images/wetsuit.svg";
import surfboard from "../../public/Images/surfboard.svg";
import shower from "../../public/Images/shower.svg";
import party from "../../public/Images/party.svg";
import noPartyAllowed from "../../public/Images/noparty.svg";
import noPetAllowed from "../../public/Images/noPets.svg";
import Wc from "@material-ui/icons/WcOutlined";
import Bathtub from "@material-ui/icons/BathtubOutlined";
import Kitchen from "@material-ui/icons/KitchenOutlined";
import Laundry from "@material-ui/icons/LocalLaundryServiceOutlined";
import Wifi from "@material-ui/icons/WifiOutlined";
import Restaurant from "@material-ui/icons/RestaurantMenuOutlined";
import Bike from "@material-ui/icons/DirectionsBikeOutlined";
import Checkin from "@material-ui/icons/Restore";
import Checkout from "@material-ui/icons/Update";
import NoSmoke from "@material-ui/icons/SmokeFree";
import Smoking from "@material-ui/icons/SmokingRooms";
import PetsIcon from "@material-ui/icons/Pets";
import NotAllowed from "@material-ui/icons/NotInterested";
import HomeIcon from "@material-ui/icons/Home";
import Star from "@material-ui/icons/StarOutline";
import List from "@material-ui/icons/ListAlt";
import Done from "@material-ui/icons/Done";
import Image from "next/image";

export default function Amenities(): JSX.Element {
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
        <div className="w-full  flex flex-col sm:flex-row justify-around mt-10">
          <div className="flex flex-row space-x-5 p-2 text-sm justify-around   sm:w-1/2 ">
            <div className="flex flex-col space-y-6  ">
              <span className="text-base">À savoir</span>
              <div className="flex flex-row">
                <Wc />
                <p className="">Wc</p>
              </div>
              <div className="flex flex-row ">
                <Image
                  src={shower}
                  alt="house"
                  width={30}
                  height={30}
                  className=""
                />
                <p className="">Douche</p>
              </div>
              <div className="flex flex-row">
                <Bathtub />
                <p className="">Baignore</p>
              </div>
            </div>
            <div className="flex flex-col space-y-6 mt-10">
              <div className="flex flex-row">
                <Kitchen />
                <p className="">Cuisine</p>
              </div>
              <div className="flex flex-row ">
                <Laundry />
                <p className="">Laundry</p>
              </div>
              <div className="flex flex-row">
                <Wifi />
                <p className="">Wifi</p>
              </div>
              <div className="flex flex-row">
                <Restaurant />
                <p className="">Restaurant</p>
              </div>
            </div>
            <div className="flex flex-col space-y-6 mt-10">
              <div className="flex flex-row">
                <Image
                  src={wetsuit}
                  alt="house"
                  width={30}
                  height={30}
                  className=""
                />
                <p className="">Wetsuit</p>
              </div>
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

              <div className="flex flex-row">
                <Bike />
                <p className="">Bike</p>
              </div>
              <div className="flex flex-row">
                <a href="/property">
                  <p className="">Others...</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col   sm:w-1/2 p-2 justify-center">
            <div className="flex flex-col justify-center ml-20">
              <span>À savoir</span>
              <div className="flex flex-col space-y-6 mt-5 ">
                <div className="flex space-x-4 ">
                  <Checkin />
                  <p className="w-11/12">Arrivée: après 17:00</p>
                </div>
                <div className="flex space-x-4">
                  <Checkout />
                  <p className="w-11/12">Depart: 10:00</p>
                </div>
                <div className="flex space-x-4">
                  <NoSmoke />
                  <p className="w-11/12">Non fumeur</p>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
