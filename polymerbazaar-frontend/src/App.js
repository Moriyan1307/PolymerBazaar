import Header from "./Components/Header/Header";
import Citywise from "./Pages/Citywise/Citywise";
import HomePage from "./Pages/HomePage/HomePage";
import logo from "../src/Assests/logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/citywise" element={<Citywise />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
