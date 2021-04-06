import React from 'react';
import './Excerpts.css';

const Excerpts = ( {items} ) => {
    return (
        <div id = 'excerpts-container'>
            {items.map((excerptItem) => {
                const {id, header, description, footer} = excerptItem;
                return (
                    <div key = {id} className = "excerpts-box">
                        <h2>{header}</h2>
                        <p>{description}</p>
                        <p id = "excerpts-box-footer">{footer}</p>
                        <div id = "excerpts-box-links">
                            {excerptItem.links.map((linkItem) => {
                                const {id, title, link} = linkItem;
                                return (
                                    <a key = {id} href={link}>{title}</a>
                                )
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Excerpts
