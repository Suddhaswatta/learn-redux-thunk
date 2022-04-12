import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTheme } from "../hooks/theme";
import NavBar from "./header/NavBar";
function App() {
  const [theme, setTheme] = useTheme("light");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar setTheme={setTheme} />
        <Routes>
          <Route exact path="/" element={<div>Home Page</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
