import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2E5F4D",
      light: "#4B7A67",
      dark: "#22483A",
      contrastText: "#F6F1E7"
    },
    secondary: {
      main: "#A27C4B",
      light: "#C39B63",
      dark: "#7D5F34"
    },
    background: {
      default: "#F8F4ED",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#1E1B16",
      secondary: "#4D463C"
    },
    success: {
      main: "#4B8B5E"
    },
    warning: {
      main: "#D8A44D"
    }
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    h1: {
      fontFamily: "'Manrope', 'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "2.4rem",
      lineHeight: 1.2
    },
    h2: {
      fontFamily: "'Manrope', 'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "1.8rem",
      lineHeight: 1.3
    },
    h3: {
      fontFamily: "'Manrope', 'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "1.4rem"
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.5
    },
    caption: {
      fontSize: "0.8rem",
      color: "#4D463C"
    }
  },
  shape: {
    borderRadius: 14
  },
  shadows: [
    "none",
    "0px 2px 8px rgba(34, 72, 58, 0.12)",
    "0px 4px 12px rgba(34, 72, 58, 0.14)",
    "0px 6px 16px rgba(34, 72, 58, 0.16)",
    "0px 8px 20px rgba(34, 72, 58, 0.18)",
    "0px 10px 24px rgba(34, 72, 58, 0.2)",
    ...Array(19).fill("0px 12px 28px rgba(34, 72, 58, 0.16)")
  ]
});

export default theme;
