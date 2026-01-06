import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";

export default function App() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}