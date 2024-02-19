import React, { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Quiz from "../pages/Quiz";
import Email from "../pages/Email";
import ThankYou from "../pages/ThankYou";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz/:page" element={<Quiz />} />
        <Route path="/email" element={<Email />} />
        <Route path="/thank" element={<ThankYou />} />
        <Route path="*" element={<Navigate to="/quiz/1" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
