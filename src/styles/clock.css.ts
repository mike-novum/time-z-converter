import { style } from "@vanilla-extract/css";
import { themeContract } from "./theme.css";

export const container = style({
  width: "300px",
  height: "300px",
  border: `6px solid ${themeContract.clockColors.border}`,
  borderRadius: "50%",
  position: "relative",
  margin: "2rem auto",
  backgroundColor: themeContract.clockColors.background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const hourNumber = style({
  position: "absolute",
  fontSize: 24,
  fontWeight: 400,
  color: themeContract.clockColors.hourNumber,
  width: "24px",
  height: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
});

export const hourArrow = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "6px",
  height: "60px",
  backgroundColor: themeContract.clockColors.hourArrow,
  transformOrigin: "bottom center",
  borderRadius: "4px",
  zIndex: 2,
});

export const minuteArrow = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "4px",
  height: "100px",
  backgroundColor: themeContract.clockColors.minuteArrow,
  transformOrigin: "bottom center",
  borderRadius: "4px",
  zIndex: 1,
});

export const centralDot = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "12px",
  height: "12px",
  backgroundColor: themeContract.clockColors.centerDot,
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 3,
});

export const timePhraseText = style({
  fontSize: 20,
  fontWeight: 300,
});
