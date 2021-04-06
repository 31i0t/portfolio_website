import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './Gallery.css';

const Gallery = ( {items} ) => {

    const [ index, setIndex ] = useState(0);
    const { id, image, header, description } = items[index];
    const previousImage = () => {
        if(index + 1 == items.length)
        {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const nextImage = () => {
        if(index - 1 == -1)
        {
            setIndex(items.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div key = {id} style = {{backgroundImage: image}} id = "image-gallery-container">
            <div  id = "image-gallery-grid">
                <button onClick={previousImage}>
                    <FaArrowLeft id = "prev-button"/>
                </button>
                <div id = "image-gallery-description">
                    <h2>{header}</h2>
                    <p>{description}</p>
                </div>
                <button onClick={nextImage}>
                    <FaArrowRight id = "next-button"/>
                </button>
            </div>
        </div>
    )
};

export default Gallery