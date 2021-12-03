import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body mx-4 sm:mx-20">
      {/* <Script> */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        console.log(window.location.hostname);
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
      {/* </Script> */}
      <Head>
        <title>RawaDev</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
