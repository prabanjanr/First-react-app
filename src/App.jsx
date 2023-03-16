import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./components/Home/Home";
import CseStudents from "./components/pages/CseStudents";
import CsePersonal from "./components/pages/CsePersonal";
import EcePersonal from "./components/pages/EcePersonal";
import EceStudents from "./components/pages/EceStudents";

const quercyClient = new QueryClient();

const App = () => {
  return (
    <div className="">
      <QueryClientProvider client={quercyClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/ECE" element={<EceStudents />} />
        </Routes>
        <Routes>
          <Route path="/CSE" element={<CseStudents />} />
        </Routes>
        <Routes>
          <Route path="/ECE/:id" element={<EcePersonal />} />
        </Routes>
        <Routes>
          <Route path="/CSE/:id" element={<CsePersonal />} />
        </Routes>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
