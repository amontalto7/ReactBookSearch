import React from "react";
import { ListItem } from "../List";
import "./style.css";

const Book = ({ title, url, _id, dateAdded, Author, handleClick, saved}) => (
    <ListItem>
        <article>
            <div className="heading">        
                <span>
                <h3>
                    <em>{title}Title</em>{" "}<p>
                    <span className="btn-group">
                        <a className="btn btn-default" href={url} rel="noopener noreferrer" target="_blank">
                            Written by {Author}
                        </a>
                        </span>
                        </p>
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
            </div>
            <div className="synopsis">
                <img src="https://placehold.it/150x150" alt="thumbnail"/>
                <p>
                Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR! Hodor hodor, hodor. Hodor hodor; hodor hodor; hodor hodor - hodor, hodor, hodor hodor. 
                </p>
            </div>
        </article>
    </ListItem>
)

export default Book;