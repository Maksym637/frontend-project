import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
