import { property } from "../../API/requests";
import { Feature, Property, Address } from "../../interfaces";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Amenities from "../../components/propertypage/amenities";
import CarouselProperty from "../../components/CarouselSlick/CarousselProperty";
import CarouselPhone from "../../components/CarouselSlick/CarouselPropertyPhone";

interface IProps extends Property {
  features: Feature[];
  address: Address;
}

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const [resProperty, resAddress, resFeatures] = await Promise.all([
    property.getOne(context.params.id),
    property.getAddress(context.params.id),
    property.getFeatures(context.params.id),
  ]);

  console.log(resAddress);
  return {
    props: { ...resProperty, features: resFeatures, address: resAddress },
  };
};
export default function PropertyId({
  address,
  name,
  description,
  type,
  priceByNight,
  features,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <div className="flex flex-col w-full text-BlueCamp h-full px-5 mb-16 md:px-20 lg:px-64">
      <section className="TETE ANNONCE-----------------------------">
        <div className="h-full  pt-16 flex flex-col mt-12 justify-between ">
          <div className="flex  justify-between">
            <span className="text-left  font-bold  text-xl">{name}</span>
            <div className="flex space-x-2">
              <span className="font-bold text-right text-xl">
                {priceByNight}€ nuit
              </span>

              <button className="flex border border-white rounded-md justify-center p-2 w-36 text-white bg-BlueCamp">
                <a href="/property">Je Contacte</a>
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col mt-2">
            <div className="hidden md:flex flex-col md:w-full  justify-center my-20">
              <CarouselProperty />
            </div>
            <div className="flex flex-col w-full  justify-center md:hidden ">
              <CarouselPhone />
            </div>
          </div>
        </div>
      </section>
      <section className="DESCRIPTION------------------------------">
        <div className="flex flex-col">
          <div className="description article mt-5">
            <p>{address.city.name}</p>
          </div>
          <div className="">
            <p>{type}</p>
          </div>
          <div className="text-justify mt-5">
            <p>{description}</p>
          </div>
        </div>
      </section>
      <Amenities features={features} />

      <section className="MAP--------------------------------------">
        <div className="flex flex-col mt-10">
          <span className="text-left  font-bold ">Emplacement</span>
          <p className="text-left ">Anglet</p>
          <div className="flex flex-col bg-gray-600 w-full h-96 m-1 p-2"></div>
        </div>
      </section>

      <section className="CONDITIONS APPLICABLES ------------------">
        <div className="flex flex-col mt-5">
          <div className="flex flex-col space-y-4 mt-5 md:flex-row md:justify-around md:p-8 md:space-x-52">
            <div className="space-y-5">
              <span className="font-bold">Conditions d&apos;annulation</span>
              <p className="text-justify">
                Annulez avant 5:00 PM le 3 juin et obtenez un remboursement
                total, à l&apos;exception des 30 premiers jours et des frais de
                service.
              </p>
              <a href="/property" className="font-bold">
                En voir plus...
              </a>
            </div>
            <div className="space-y-5">
              <span className="font-bold">Santé et sécurité</span>
              <p className="text-justify">
                S&apos;engage à appliquer le processus de nettoyage renforcé de
                SurfCamp.
              </p>
              <p className="">
                Les consignes d&apos;Airbnb en matière de distanciation physique
                et d&apos;autres consignes liées au COVID-19 s&apos;appliquent.
              </p>

              <a href="/property" className="font-bold">
                En voir plus...
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
