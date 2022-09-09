import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body px-4 sm:px-20 dark:bg-primary bg-[#FFF8F3]">
      <Head>
        <title>RawaDev</title>
      </Head>
      <NextNProgress
        color="#FF8600"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
        spinner
        options={{ showSpinner: false }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
