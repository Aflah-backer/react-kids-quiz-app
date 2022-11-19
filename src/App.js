import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TestStart from "./pages/TestStart";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testStart" element={<TestStart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
