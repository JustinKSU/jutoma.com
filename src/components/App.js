import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";

export default function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route element={<PageNotFound />} />
            </Routes>
        </div>
    );
}