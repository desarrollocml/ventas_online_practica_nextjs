import { useEffect } from "react";
import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  //--- Corregir error de material-ui ---
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  //--- Fin Corregir error de material-ui ---
  return (
    <StoreProvider>
      <Component {...pageProps} />;
    </StoreProvider>

  )
}

export default MyApp;
