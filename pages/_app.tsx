import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer/Footer";
import Layout from "../components/layout/Layout";
import NavBar from "../components/navBar/NavBar";
import SearchBar from "../components/searchBar/SearchBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
      <SearchBar />
      <Footer />
    </Layout>
  );
}

export default MyApp;
