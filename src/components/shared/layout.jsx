import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default function Layout(){
    return (
        <Router>
            <Routes>
                < Route path="home" element={<Home/>} />

                
            </Routes>
        </Router>

    )
};