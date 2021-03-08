import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import '../styles/globals.css';
import "tailwindcss/tailwind.css";
import "../assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
