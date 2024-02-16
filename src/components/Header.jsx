import React, { useState, useContext } from "react";
import { DarkContext } from "../App";
import FlipCard from "./FlipCard";

export default function Header() {
    const myName = "Josh Hittie";
    const [nameText, setNameText] = useState(myName);
    const [isDarkMode, setIsDarkMode] = useContext(DarkContext);

    const handleNameMouseOver = () => {
        setNameText("Web Developer");
    };

    const handleNameMouseOut = () => {
        setNameText(myName);
    };

    function toggleDarkMode() {
        setIsDarkMode((prevState) => !prevState);
    }

    // Add dark mode class to the root HTML element
    React.useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <>
            <header className="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-400">
                <div className="mx-8">
                    <div className="mx-auto flex max-w-[92rem] items-center justify-between py-5 md:justify-evenly">
                        <div
                            className="flex w-28 whitespace-nowrap"
                            aria-label="Josh Hittie is a Web Developer"
                        >
                            {/* Re-examine this later. I can't get the gradient styles to apply properly */}
                            {/* <FlipCard textFront={myName} textBack={"Web Developer"}
                        tailwindShared={"text-2xl"}
                        tailwindFrontCard={""}
                        tailwindBackCard={""} /> */}
                            <div
                                className="transform animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent duration-500 ease-in-out hover:-skew-y-1 hover:scale-125 hover:from-[#D42406] hover:to-[#EBAD25] hover:drop-shadow-md"
                                onMouseOver={handleNameMouseOver}
                                onMouseOut={handleNameMouseOut}
                            >
                                {nameText}
                            </div>
                        </div>
                        <nav className="flex gap-4">
                            <a
                                href="#"
                                className="group hidden text-xl font-medium transition hover:font-semibold hover:drop-shadow-md dark:hover:text-slate-200 sm:block"
                            >
                                About
                                <span className="block h-0.5 max-w-0 bg-purple-400 transition-all duration-500 group-hover:max-w-full "></span>
                            </a>
                            <a
                                href="#"
                                className="group hidden text-xl font-medium transition hover:font-semibold hover:drop-shadow-md dark:hover:text-slate-200 sm:block"
                            >
                                Projects
                                <span className="block h-0.5 max-w-0 bg-purple-400 transition-all duration-500 group-hover:max-w-full "></span>
                            </a>
                        </nav>
                        <div className="">
                            <button
                                className="border-grey-300 ring-grey-300 dark:border-grey-700 dark:ring-grey-200 flex items-center justify-center rounded-full border-2 bg-transparent p-2 transition-all hover:ring-2 hover:ring-offset-2 dark:bg-transparent dark:hover:ring-2 dark:hover:ring-offset-2"
                                aria-label="Toggle dark mode"
                                onClick={toggleDarkMode}
                            >
                                {isDarkMode ? (
                                    <svg
                                        fill="none"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        aria-label="Switch to light color mode"
                                        className="h-6 w-auto sm:h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        fill="none"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        aria-label="Switch to dark color mode"
                                        className="h-6 w-auto sm:h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="flex justify-center gap-4 pb-2 sm:hidden">
                    <button className="border-grey-300 ring-grey-300 dark:border-grey-700 dark:ring-grey-200 rounded-lg border-2 bg-transparent px-2 py-1 transition-all hover:font-bold hover:ring-2 hover:ring-offset-2 dark:bg-transparent dark:hover:ring-2 dark:hover:ring-offset-2">
                        About
                    </button>
                    <button className="border-grey-300 ring-grey-300 dark:border-grey-700 dark:ring-grey-200 rounded-lg border-2 bg-transparent px-2 py-1 transition-all hover:font-bold hover:ring-2 hover:ring-offset-2 dark:bg-transparent dark:hover:ring-2 dark:hover:ring-offset-2">
                        Projects
                    </button>
                </nav>
            </header>
        </>
    );
}