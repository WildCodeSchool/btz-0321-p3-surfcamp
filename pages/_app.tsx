import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
