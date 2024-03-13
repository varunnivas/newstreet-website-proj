import { createTheme } from "@mui/material/styles";
import "./index.css"


const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ff0000",
      dark: "#ff0000",
      contrastText: "#fff",
    },
    background: {
      default: "#101010",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontSize: 20,
    fontFamily: "Poppins",
    p: {
      fontSize: "0.9rem",
      fontFamily: "cursive",
      lineHeight: 1.5,
      margin: "0 0 1rem",
      color: "#808",
    },
    h1: {
      fontSize: "2.8rem",
      fontWeight: "800",
      color: "#fff",
    },
    h2: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#666666",
    },
    h3: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#666666",
    },
    h4: {
      fontSize: "0.8rem",
      fontWeight: "600",
      color: "#666666",
    },
    h5: {
      fontSize: "0.7rem",
      fontWeight: "500",
      color: "#666666",
    },
    h6: {
      fontSize: "0.6rem",
      fontWeight: "500",
      color: "#666666",
    },
    MenuHeader: {
      fontFamily: "cursive",
      fontSize: "0.8rem",
      fontWeight: "500",
      color: "#fff",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#914934",
          borderRadius: "15px",
          border: "1px solid #914934",
          padding: "10px",
          backgroundColor: "#fff",
          "&:focus": {
            borderColor: "#265073",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { // This applies to all buttons
          '&:hover': {
            backgroundColor: 'red', // Change color to red when button is clicked
          },
        },
        containedSecondary: {
          fontFamily: "cursive",
          borderRadius: "1px",

        },
      },
    },
  },
});

export default theme;
