import { style } from "@vanilla-extract/css";
import { themeContract } from "./theme.css";

export const converterSection = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  padding: 32,
});

export const startSection = style({
  display: "flex",
  gap: 32,
  opacity: 0,
  minHeight: 480,
  alignItems: "center",
  justifyContent: "center",
});

export const contentBody = style({
  paddingTop: 64,
  paddingBottom: 64,
  paddingLeft: 24,
  paddingRight: 24,
  maxWidth: 1024,
  marginLeft: "auto",
  marginRight: "auto",
});

export const infoSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 320,
  gap: 32,
});

export const glass = style({
  background: themeContract.glass.background,
  boxShadow: themeContract.glass.boxShadow,
  border: themeContract.glass.border,
  borderRadius: 16,
  backdropFilter: "blur(7.4px)",
  WebkitBackdropFilter: " blur(7.4px)",
});

export const infoCard = style({
  width: 256,
  padding: 16,
  fontWeight: 300,
});

export const footer = style({
  height: 80,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: themeContract.colors.ghostText,
  fontSize: 14,
  fontWeight: 200,
});
