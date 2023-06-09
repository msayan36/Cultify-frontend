import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Selection from "./pages/Selection";
import Ref from "./pages/Ref";

function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/selection" element={<Selection />} />
                <Route path={`/email/verify`} element={<Ref />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
