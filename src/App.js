import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Router from "./shared/Router";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
