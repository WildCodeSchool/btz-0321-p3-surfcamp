import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout/Layout";
import SearchBar from "../components/searchBar/SearchBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
      <SearchBar />
    </Layout>
  );
}

export default MyApp;
