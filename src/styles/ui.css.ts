import { style } from "@vanilla-extract/css";
import { fontFamily } from "./fonts.css";
import { themeContract } from "./theme.css";

export const timeInput = style({
  padding: "0.5rem",
  margin: "1rem",
  background: themeContract.input.background,
  color: themeContract.input.text,
  fontFamily: fontFamily,
  height: 48,
  width: 128,
  textAlign: "center",
  borderRadius: "12px",
  border: `2px solid ${themeContract.input.border}`,
  paddingTop: "0px",
  paddingBottom: "0px",
  fontWeight: 400,
  fontSize: 24,
  outline: "none",
  "::-webkit-calendar-picker-indicator": {
    filter: "invert(100%)",
  },

  ":focus-visible": {
    outlineWidth: "thin",
    outlineColor: themeContract.colors.focus,
    outlineStyle: "solid",
    outlineOffset: 2,
  },
});

export const button = style({
  height: 48,
  padding: "0px 16px",
  borderRadius: 16,
  outline: "none",
  cursor: "pointer",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  background: themeContract.button.background,
  boxShadow: `0 4px 30px ${themeContract.button.boxShadow}`,
  border: `1px solid ${themeContract.button.border}`,
  color: themeContract.button.text,
  fontWeight: 300,
  fontFamily: fontFamily,

  ":hover": {
    background: themeContract.button.backgroundHover,
  },
  ":active": {
    opacity: 0.7,
  },
  ":focus-visible": {
    outlineWidth: "thin",
    outlineColor: themeContract.colors.focus,
    outlineStyle: "solid",
    outlineOffset: 2,
  },
});

export const secondaryText = style({
  fontSize: 20,
  fontWeight: 100,
  color: themeContract.colors.textSecondary,
});
