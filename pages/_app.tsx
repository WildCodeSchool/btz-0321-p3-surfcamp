import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer/Footer";
import Layout from "../components/layout/Layout";
import NavBar from "../components/navBar/NavBar";
import SearchBar from "../components/searchBar/SearchBar";
import "../styles/globals.css";
import Filter from "../components/Filter/Filter";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
<<<<<<< HEAD
      <SearchBar />
      <Component {...pageProps} />
=======
      <NavBar />
      <Filter />
      <Component {...pageProps} />
      <SearchBar />
      <Component {...pageProps} />
      <Footer />
>>>>>>> develop
    </Layout>
  );
}

export default MyApp;
