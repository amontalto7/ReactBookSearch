import React from "react";
import "./style.css";

export const ListItem  = props =>
    <li className="list-group-item">
        {props.children}
    </li>;