import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body mx-4 sm:mx-20">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-WDZXJQYBHX`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WDZXJQYBHX', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Head>
        <title>RawandDev</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
