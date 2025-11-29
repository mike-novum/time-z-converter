import { fontFace } from "@vanilla-extract/css";

export const fontFamily = fontFace([
  {
    src: "url('/fonts/Gros_Ventre_Bold.ttf')",
    fontWeight: 600,
  },
  {
    src: "url('/fonts/Gros_Ventre_Semibold.ttf')",
    fontWeight: 500,
  },
  {
    src: "url('/fonts/Gros_Ventre_Regular.ttf')",
    fontWeight: 400,
  },
  {
    src: "url('/fonts/Gros_Ventre_Light.ttf')",
    fontWeight: 300,
  },
  {
    src: "url('/fonts/Gros_Ventre_Thin.ttf')",
    fontWeight: 100,
  },
]);
