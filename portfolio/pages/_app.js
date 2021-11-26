import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body">
      <Head>
        <title>RawandDev</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
