import React from "react";
import { ListItem } from "../List";
import "./style.css";

const Book = ({ title, url, _id, dateAdded, handleClick, saved}) => (
    <ListItem>
        <span>
        <h3>
            <em>{title}</em>{" "}
            <span className="btn-group pull-right">
                <a className="btn btn-default" href={url} rel="noopener noreferrer" target="_blank">
                    View Book
                </a>
                </span>
        </h3>
        </span>
        <span>
                <button onClick={() => handleClick(_id)} className="btn btn-primary">
                    View
                </button>
                <button onClick={() => handleClick(_id)} className="btn btn-primary">
                    Save
                </button>

        </span>
        
    </ListItem>
)

export default Book;