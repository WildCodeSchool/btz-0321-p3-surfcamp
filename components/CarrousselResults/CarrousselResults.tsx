import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import axios from "axios";

interface IProps {
  ressource: string;
  take: string;
}

export default function CarrousselResults({
  ressource,
  take,
}: IProps): JSX.Element {
  const [skipQuery, setSkipQuery] = useState(0);
  const [loading, setLoading] = useState(true);

  const { error, data, refetch, isLoading } = useQuery(`${ressource}`, () =>
    axios(`http://localhost:5000/${ressource}/?skip=${skipQuery}&take=${take}`)
  );

  const forward = () => {
    setLoading(false);
    setSkipQuery((c) => (c += parseInt(take)));
    refetch();
  };

  const backward = () => {
    setSkipQuery((c) => (c -= parseInt(take)));
    refetch();
  };

  useEffect(() => {
    setLoading(true);
  }, [skipQuery]);

  if (error) return <div>...error</div>;
  if (isLoading) return <div>...loading</div>;
  return (
    <div className="w-full flex items-center align-middle justify-around h-full">
      <button onClick={backward}>BW</button>
      {loading &&
        data?.data.map((image: { url: string }, index: number) => {
          return (
            <div key={index}>
              <Image src={image.url} width={100} height={100} quality={100} />
            </div>
          );
        })}
      <button onClick={forward}>FW</button>
    </div>
  );
}
