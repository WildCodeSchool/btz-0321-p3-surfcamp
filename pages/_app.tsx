import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer/Footer";
import Layout from "../components/layout/Layout";
import NavBar from "../components/navBar/NavBar";
import SearchBar from "../components/searchBar/SearchBar";
import "../styles/globals.css";
import "../components/searchBar/SearchBar.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <NavBar />
      <SearchBar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
