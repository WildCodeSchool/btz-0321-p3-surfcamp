import { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import axios from "axios";

interface IProps {
	ressource: string;
}

export default function Carroussel({ ressource }: IProps): JSX.Element {
	const [skipQuery, setSkipQuery] = useState(0);
	const { error, data, refetch, isLoading } = useQuery(`${ressource}`, () =>
		axios(`http://localhost:5000/${ressource}/?skip=${skipQuery}&take=4`));

	const forward = () => {
		setSkipQuery(c => c += 4)
		refetch()
	}
	const backward = () => {
		if (skipQuery === 0) { setSkipQuery(0) }
		else {
			setSkipQuery(c => c -= 4)
			refetch()
		}
	}

	if (error) return <div>...error</div>
	if (isLoading) return <div>...loading</div>

	return (
		<div className="w-full flex items-center align-middle justify-around h-full">
			<button onClick={backward}>BACKWARD</button>
			{
				data && data.data.map((image: { url: string }, index: number) => {
					return <div key={index}><Image src={image.url} width={300} height={300} quality={100} /></div>;
				})
			}
			<button onClick={forward}>FORWARD</button>
		</div>
	)
}
