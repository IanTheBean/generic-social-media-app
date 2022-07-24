import Login from "./Login/Login";
import { Routes, IndexRoute, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Home } from "./Home/Home";

function App() {
  const [signedIn, setSignedin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />\
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
