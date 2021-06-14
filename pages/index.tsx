import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/navBar/NavBar";
import SearchBar from "../components/searchBar/SearchBar";
interface IProps {
  name: string;
}

export default function Home({ name }: IProps) {
  return (
    <div className="flex flex-col w-full h-screen bg-blue-300 ">
      <Head>
        <title>Surf Camp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
