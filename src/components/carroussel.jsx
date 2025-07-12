import React, { useState } from 'react';
import '../style/carrousel.scss';
import arrowLeft from '../assets_images/arrow/arrow-left.png';
import arrowRight from '../assets_images/arrow/arrow-right.png';

function Carrousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = images.length;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carrousel">
            {total > 1 && (
                <>
                    <button className="arrow left" onClick={goToPrevious}>
                        <img src={arrowLeft} alt="Flèche gauche" />
                    </button>
                    <button className="arrow right" onClick={goToNext}>
                        <img src={arrowRight} alt="Flèche droite" />
                    </button>
                    <div className="counter">
                        {currentIndex + 1} / {total}
                    </div>
                </>
            )}
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="carrousel-image"
            />
        </div>
    );
}

export default Carrousel;
