import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./header/NavBar";
function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<div>Home Page</div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
