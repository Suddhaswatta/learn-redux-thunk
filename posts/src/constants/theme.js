import { createTheme } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";

const light = {
  // palette values for light mode
  primary: amber,
  divider: amber[200],
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
};
const dark = {
  // palette values for dark mode
  primary: {
    main: "#fcb41a",
    light: "#fdca33",
    dark: "#fa7212",
  },
  background: {
    default: "#303030",
    paper: "#424242",
  },
  secondary: {
    main: "#f50057",
  },
  text: {
    primary: "#fbf7f7",
  },
};

export default function getDesignTokens(mode) {
  return createTheme({
    palette: {
      type: mode,
      ...(mode === "light" ? light : dark),
    },
  });
}
