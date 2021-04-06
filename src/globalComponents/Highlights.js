import React from 'react';
import './Highlights.css';

const Highlights = ( {items} ) => {
    return (
        <div id = 'highlights-container'>
            {items.map((highlightItem) => {
                const {id, icon, header, description} = highlightItem;
                return (
                    <div key = {id} className = "highlights-box">
                        <img className = "highlights-box-icon" src = {icon} alt = {header} />
                        <h2>{header}</h2>
                        <p>{description}</p>
                     </div>
                );
            })}
        </div>
    );
};

export default Highlights