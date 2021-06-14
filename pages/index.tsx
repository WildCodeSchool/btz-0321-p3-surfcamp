import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/navBar/NavBar";
interface IProps {
  name: string;
}

export default function Home({ name }: IProps) {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-blue-300 ">
        <Head>
          <title>Surf Camp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />
      </div>
      <div>hello world</div>
    </>
  );
}
