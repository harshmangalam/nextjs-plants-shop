import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utils/createEmotionCache";
import lightTheme from "../themes/lightTheme";
import AppLayout from "../layouts/AppLayout";
import { SnackbarProvider } from "notistack";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <SnackbarProvider>
          {getLayout(<Component {...pageProps} />)}
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
