import React from 'react';
import { Link } from 'react-router-dom';
import '../style/card.scss';

function Card({ logement }) {
    return (
        <Link to={`/logement/${logement.id}`} className="card">
            < div className="card-content">
                <img src={logement.cover} alt={logement.title} className='card-image'/>
                <div className="overlay-card"></div>
                <h2 >{logement.title}</h2>
            </div>
        </Link>
    );
}

export default Card;
