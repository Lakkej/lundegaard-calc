import store from "../src/store/store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
