import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import {QueryClientProvider,QueryClient} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
