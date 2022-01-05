import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //--- Corregir error de material-ui ---
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  //--- Fin Corregir error de material-ui ---
  return <Component {...pageProps} />;
}

export default MyApp;
