import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import axios from "axios";

interface IProps {
  ressource: string;
  take: string;
}

export default function Carroussel({ ressource, take }: IProps): JSX.Element {
  const [skipQuery, setSkipQuery] = useState(0);
  const [animation, setAnimation] = useState("");
  const [loading, setLoading] = useState(true);

  const { error, data, refetch, isLoading } = useQuery(`${ressource}`, () =>
    axios(`http://localhost:5000/${ressource}/?skip=${skipQuery}&take=${take}`)
  );

  const forward = () => {
    setLoading(false);
    setSkipQuery((c) => (c += parseInt(take)));
    refetch();
    setAnimation("");
  };

  const backward = () => {
    setSkipQuery((c) => (c -= parseInt(take)));
    refetch();
  };

  useEffect(() => {
    setAnimation("scale-in-center");
    setLoading(true);
  }, [skipQuery]);

  if (error) return <div>...error</div>;
  if (isLoading) return <div>...loading</div>;
  return (
    <div className="w-full flex items-center align-middle justify-around h-full">
      <button onClick={backward}>BACKWARD</button>
      {loading &&
        data?.data.map((image: { url: string }, index: number) => {
          return (
            <div className={`${animation}`} key={index}>
              <Image
                className={`${animation}`}
                src={image.url}
                width={300}
                height={300}
                quality={100}
              />
            </div>
          );
        })}
      <button onClick={forward}>FORWARD</button>
    </div>
  );
}
