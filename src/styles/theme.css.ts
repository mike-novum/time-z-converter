import { createGlobalThemeContract } from "@vanilla-extract/css";

type ThemeTokens = {
  colors: {
    background: string;
    backgroundGradient: string;
    card: string;
    text: string;
    textSecondary: string;
    ghostText: string;
    invertedText: string;
    accent: string;
    focus: string;
  };
  glass: {
    background: string;
    boxShadow: string;
    border: string;
  };
  clockColors: {
    background: string;
    centerDot: string;
    minuteArrow: string;
    hourArrow: string;
    hourNumber: string;
    border: string;
  };
  input: {
    background: string;
    border: string;
    text: string;
  };
  button: {
    background: string;
    backgroundHover: string;
    text: string;
    border: string;
    boxShadow: string;
  };
};

type NullableDeep<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<infer U>
      ? Array<NullableDeep<U>>
      : NullableDeep<T[K]>
    : T[K] | null;
};

const toTitleCase = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

export const themeContract = createGlobalThemeContract<
  NullableDeep<ThemeTokens>
>(
  {
    colors: {
      background: null,
      backgroundGradient: null,
      card: null,
      text: null,
      ghostText: null,
      textSecondary: null,
      invertedText: null,
      accent: null,
      focus: null,
    },
    glass: {
      background: null,
      boxShadow: null,
      border: null,
    },
    clockColors: {
      background: null,
      centerDot: null,
      minuteArrow: null,
      hourArrow: null,
      hourNumber: null,
      border: null,
    },
    input: {
      background: null,
      border: null,
      text: null,
    },
    button: {
      background: null,
      backgroundHover: null,
      text: null,
      border: null,
      boxShadow: null,
    },
  },
  (_value, path) => `${path.map(toTitleCase).join("")}`,
);

export const lightThemeTokens: ThemeTokens = {
  colors: {
    background: "white",
    backgroundGradient: "linear-gradient(45deg, #c3c0ec, #c3c0ec00)",
    card: "#eae8ff",
    text: "#121212",
    textSecondary: "#434366",
    invertedText: "white",
    accent: "#514df2",
    focus: "#9593f1",
    ghostText: "#303036",
  },
  clockColors: {
    background: "#fff",
    centerDot: "#000",
    minuteArrow: "#000",
    hourArrow: "#000",
    hourNumber: "#000",
    border: "#000",
  },
  input: {
    background: "#19191f",
    text: "#000",
    border: "#000",
  },
  glass: {
    background: "rgb(194 184 238 / 6%)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    border: " 1px solid rgba(255, 255, 255, 0.17)",
  },
  button: {
    background: "rgb(237 236 255)",
    backgroundHover: "rgb(218 214 255)",
    boxShadow: "rgba(0, 0, 0, 0.1)",
    border: "rgb(195 195 229)",
    text: "#000",
  },
};

export const darkThemeTokens: ThemeTokens = {
  colors: {
    background: "#2a2a34",
    backgroundGradient: "linear-gradient(45deg, black, #2a2a34)",
    // Delete
    card: "#18181c",

    text: "#ffffff",
    textSecondary: "#7878a0",
    // Delete
    invertedText: "#121212",
    focus: "#7c7cc0",
    ghostText: "#303036",
    // Delete
    accent: "#514df2",
  },
  clockColors: {
    background: "#fff",
    centerDot: "#66667e",
    minuteArrow: "#434345",
    hourArrow: "#434345",
    hourNumber: "#000",
    border: "#46464d",
  },
  input: {
    background: "#19191f",
    text: "#fff",
    border: "#49494e",
  },
  glass: {
    // TODO: maybe it
    //   background: " rgba(255, 255, 255, 0.06)",
    background: "rgb(194 184 238 / 6%)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.17)",
  },
  button: {
    background: "rgb(36 36 36 / 9%)",
    backgroundHover: " rgb(36 36 36 / 40%)",
    boxShadow: "rgba(0, 0, 0, 0.1)",
    border: "rgb(37 37 45)",
    text: "#fff",
  },
};
