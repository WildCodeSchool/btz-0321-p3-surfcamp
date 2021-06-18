import Image from "next/image";

function SliderMobile() {
  const imgTest: [
    { img: string; title: string },
    { img: string; title: string },
    { img: string; title: string }
  ] = [
    { img: "/Hossegor.jpg", title: "Hossegor" },
    { img: "/Lacanau.jpeg", title: "Lacanau" },
    { img: "/Nantes.jpeg", title: "Nantes" },
  ];
  return (
    <div>
      {imgTest.map((test, index) => (
        <ul key={index}>
          <li>
            <Image src={test.img} alt="" width={150} height={150} />
            <p>{test.title}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SliderMobile;
