import React from "react";
import "./style.css";

export const List = ({ children }) => {
    return (
        <ul className = "list-group">
            {children}
        </ul>
    );
};