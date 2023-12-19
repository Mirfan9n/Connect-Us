import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Connect Us</title>
        <link rel="shortcut icon" href="/avatars/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </StateProvider>
  );
}
