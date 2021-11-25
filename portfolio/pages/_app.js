import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body">
      <Head>
        <title>RawandDev</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Work />
    </div>
  );
}

export default MyApp;
