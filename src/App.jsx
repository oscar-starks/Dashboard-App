import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Products from "./components/products";
import Layout from "./components/shared/layout";
import "./index.css";
import RouteLogger from "./components/shared/logging";

export default function App(){
    return (
        <Router>
            <RouteLogger/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/products" element={<Products/>} />
                </Route>
            </Routes>
        </Router>

    )
};