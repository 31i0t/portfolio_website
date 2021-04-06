import React, { useState } from 'react';
import './InfoPanel.css';

const InfoPanel = ( {items} ) => {
    return (
        <article id = "infopanel-container">
            {items.map((infoItem) => {
                const {id, image, header, description} = infoItem;
                return (
                    <div key = {id} id = "infopanel-item">
                        <img src = {image} alt = {header} />
                        <h2>{header}</h2>
                        <p>{description}</p>
                        <div id = "infopanel-links">
                            {infoItem.links.map((linkItem) => {
                                const {id, title, link} = linkItem;
                                return (
                                    <a key = {id} href={link}>{title}</a>
                                )
                            })}
                        </div>
                    </div>
                );
            })}
        </article>
    );
};

export default InfoPanel