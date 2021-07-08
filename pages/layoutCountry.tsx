import Carroussel from "../components/Carroussel/Carroussel";
import LayCounHeader from "../components/LayoutCountry/LayCounHeader/LayCounHeader";
import TextSCO from "../components/LayoutCountry/TextSCO/TextSCO";

export default function layoutCountry(): JSX.Element {
  return (
    <div className="w-full h-40">
      <LayCounHeader />
      <div className="h-64 bg-BlueCamp">
        <TextSCO />
      </div>
      <div className="md:flex hidden flex-col">
        <h3 className="text-center py-5">Par ville :</h3>
        <Carroussel take="4" ressource="citypictures" />
      </div>
      <div className="flex md:hidden">
        <h3>Par ville :</h3>
        <Carroussel take="1" ressource="citypictures" />
      </div>
    </div>
  );
}
