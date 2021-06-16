import Head from "next/head";
import PropertyForm from "../components/PropertyForm/PropertyForm";
import Footer from '../components/Footer/Footer'

interface IProps {
  name: string;
}

export default function Home({ name }: IProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Head>
        <title>Surf Camp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PropertyForm />
      <Footer />
     
    </div>
  );
}
