import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import configData from "../assets/configData.json";
import ScrollToTopButton from "../components/atoms/ScrollToTopButton";

export const DarkContext = createContext("");

export default function Layout() {
    const [isDarkMode, setIsDarkMode] = useState(
        JSON.parse(localStorage.getItem("isDarkMode")) ?? false,
    );

    return (
        <DarkContext.Provider value={[isDarkMode, setIsDarkMode]}>
            <Header configData={configData} />
            <main className="mx-4 max-w-4xl py-8 sm:mx-12 sm:mt-8 lg:mx-auto">
                <Outlet context={configData} />
            </main>
            <Footer configData={configData} />
            <ScrollToTopButton />
        </DarkContext.Provider>
    );
}
