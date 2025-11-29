import { assignVars, globalStyle } from "@vanilla-extract/css";
import { darkThemeTokens, lightThemeTokens, themeContract } from "./theme.css";
import { fontFamily } from "./fonts.css";

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: light)": {
      vars: assignVars(themeContract, lightThemeTokens),
    },
    "(prefers-color-scheme: dark)": {
      vars: assignVars(themeContract, darkThemeTokens),
    },
  },

  backgroundColor: themeContract.colors.background,
  background: themeContract.colors.backgroundGradient,
  color: themeContract.colors.text,
  fontFamily: fontFamily,
  lineHeight: 1.5,
  fontWeight: 400,
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("html", {
  backgroundColor: themeContract.colors.background + "!important",
});

globalStyle("body", {
  margin: 0,
  display: "flex",
  justifyContent: "center",
  placeItems: "center",
  minWidth: 320,
  minHeight: "100vh",
});

globalStyle("h1", {
  fontSize: 48,
});
