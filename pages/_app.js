// Google TagManager
import React, { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import Layout from "/components/layout";

// Normalize.css
import "../node_modules/normalize.css/normalize.css";
import "../styles/globals.scss";

// Google TagManager
const tagManagerArgs = {
  gtmId: "GTM-N6T8XD",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Layout><Component {...pageProps} /></Layout>;
}

export default MyApp;
