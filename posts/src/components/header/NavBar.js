import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, IconButton, Switch } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function NavBar({ setTheme }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Posts App
            </Typography>
            <IconButton sx={{ ml: 1 }} >
              {checked ? <Brightness4Icon /> : <Brightness7Icon />}
              <Switch
                defaultChecked
                color="secondary"
                size="small"
                onChange={handleChange}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        </Box>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
