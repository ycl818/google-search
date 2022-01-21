import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const Routers = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="/videos" element={<Results />} />
        <Route path="/search" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/images" element={<Results />} />
      </Routes>
    </div>
  );
};
