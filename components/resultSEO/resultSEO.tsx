import CarrousselResults from "../CarrousselResults/CarrousselResults";

export default function ResultSEO(): JSX.Element {
  return (
    <div className="h-full w-full flex flex-col justify-around p-5">
      <div className="hidden xl:flex">
        <CarrousselResults take="4" ressource="citypictures" />
      </div>
      <div className=" text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eos
        labore tempore qui repellat maiores distinctio voluptatibus blanditiis
        deserunt explicabo consectetur non optio cumque sequi, quis, veniam
        laborum voluptates necessitatibus nobis? Suscipit quidem laborum
        distinctio, exercitationem beatae itaque consequatur maxime minima
        totam, quaerat, reiciendis nostrum aperiam saepe natus fugiat? Nulla,
        magnam et sequi ipsa laborum optio illo inventore rerum nobis quidem
        porro vitae, repudiandae fugit maxime. Atque, velit saepe! Veniam error
        ducimus facere quod modi. Ut incidunt exercitationem voluptate ratione
        soluta officia vitae doloribus earum corporis optio maxime assumenda
        nesciunt commodi quidem recusandae dignissimos, ipsa tenetur quis
        quaerat.
      </div>
    </div>
  );
}
