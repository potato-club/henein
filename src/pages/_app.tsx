import '../../styles/globals.css';
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from "next/router";
import Layout from "../component/Layout";
import { Provider } from "react-redux";
import { store, persistor } from "../../store/store";
import SecondLayout from "../component/SecondLayout";
import { ThemeProvider } from "next-themes";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useState(() => new QueryClient())[0];
  const router = useRouter();
  const shouldRenderLayout = !["/login", "/signUp", "/register"].includes(
    router.pathname
  );

  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                {shouldRenderLayout ? (
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                ) : (
                  <SecondLayout>
                    <Component {...pageProps} />
                  </SecondLayout>
                )}
              </PersistGate>
            </Provider>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
