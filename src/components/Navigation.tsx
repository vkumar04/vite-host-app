import { Suspense } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { AppShell, Navbar, Header, Text } from "@mantine/core";
// @ts-ignore
import { About } from "remoteApp/About";
// @ts-ignore
import { ChartsPage } from "chartApp/Charts";
import { Home } from "../pages/Home";
const Navigation = () => {
  return (
    <BrowserRouter>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/chart">Chart</Link>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            <Text>Test App</Text>
          </Header>
        }
      >
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chart" element={<ChartsPage />} />
          </Routes>
        </Suspense>
      </AppShell>
    </BrowserRouter>
  );
};

export default Navigation;
