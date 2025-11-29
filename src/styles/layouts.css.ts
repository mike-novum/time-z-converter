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
  minHeight: "calc(100vh - 64px)",
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
  position: "relative",
  paddingTop: 64,
  paddingBottom: 64,
  marginBottom: 80,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: 64,
  gridRowGap: 64,
});

export const infoSectionLeftCell = style({
  display: "flex",
  justifyContent: "flex-end",
  // alignItems: "flex-end",
});

export const infoSectionRightCell = style({
  display: "flex",
  justifyContent: "flex-start",
  // alignItems: "flex-end",
});

export const infoSectionLine = style({
  position: "absolute",
  background: "#25252e8f",
  width: 2,
  top: 0,
  bottom: 0,
  left: "calc(50% - 1px)",
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
  height: "fit-content",
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
