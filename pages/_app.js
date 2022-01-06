import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body px-4 sm:px-20 dark:bg-primary bg-[#FFF8F3]">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        if (window.location.hostname !== 'localhost') {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            }
                `}
      </Script>
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
