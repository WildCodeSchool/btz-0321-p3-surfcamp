import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout/Layout";
import SearchBar from "../components/searchBar/SearchBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <SearchBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
