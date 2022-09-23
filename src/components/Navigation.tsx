import { Suspense } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
// @ts-ignore
import { About } from "remoteApp/About";
import { Home } from "../pages/Home";
const Navigation = () => {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
      <Suspense fallback="loading...">
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
