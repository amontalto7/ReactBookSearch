import React from "react";
import { ListItem } from "../List";
import "./style.css";

const Book = ({key, title, url, _id, authors, synopsis, handleClick, image, saved}) => (
    <ListItem>
        <article>
            <div className="heading">        
                <span>
                    <h4>
                    <span className="btn-group">
                        <a href={url} rel="noopener noreferrer" target="_blank">
                        <em>{title}</em>{" "}
                        </a>
                        </span>
                    </h4>
                    <p>
                    Written by {authors.join(", ")}
                    </p>
                </span>
                <span>
                    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer" role="button">View</a>

                        <button onClick={() => handleClick(_id)} className="btn btn-primary">
                            Save
                        </button>

                </span>
            </div>
            <div className="synopsis">
                <img src={image} alt={title}/>
                <p>
                    {synopsis ? synopsis : 'hodor' }
                {/* Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor - hodor hodor! Hodor, hodor, hodor. Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor hodor; hodor hodor? Hodor. Hodor HODOR hodor, hodor hodor... Hodor hodor hodor; hodor hodor?! Hodor hodor - hodor hodor; hodor hodor; hodor hodor? Hodor hodor - hodor hodor... Hodor hodor hodor hodor. Hodor. Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor - hodor hodor! Hodor hodor HODOR! Hodor hodor, hodor. Hodor hodor; hodor hodor; hodor hodor - hodor, hodor, hodor hodor.  */}
                </p>
            </div>
        </article>
    </ListItem>
)

export default Book;