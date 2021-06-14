import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/navBar/NavBar";
import SearchBar from "../components/searchBar/SearchBar";
interface IProps {
  name: string;
}

export default function Home({ name }: IProps) {
  return (
    <>
      <Head>
        <title>Surf Camp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>hello world</div>
    </>
  );
}
