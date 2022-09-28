import React from "react";
import "../styles/header.scss";

export default function Header() {
    return (
        <header>
            <div>
                <h1>React ToDo&nbsp;</h1>
                <img
                    src="logo192.png"
                    title="React Logo"
                    alt="React Logo"
                    width="36"
                    height="36"
                ></img>
            </div>
        </header>
    )
}