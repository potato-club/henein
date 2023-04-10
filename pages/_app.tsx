import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from "next/router";
import Layout from "../src/component/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";
import SecondLayout from "../src/component/SecondLayout";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useState(() => new QueryClient())[0];
  const router = useRouter();
  const shouldRenderLayout = !["/login", "/signUp", "/register"].includes(
    router.pathname
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            {shouldRenderLayout ? (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <SecondLayout>
                <Component {...pageProps} />
              </SecondLayout>
            )}
          </Provider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}
