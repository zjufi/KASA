import React from 'react';
import { Link } from 'react-router-dom';
import '../style/card.css';

function Card({ logement }) {
    return (
        <Link to={`/logement/${logement.id}`} className="card">
            <div className="card-image">
                <img src={logement.cover} alt={logement.title}/>
            </div>
            <div className="card-content">
                <h2>{logement.title}</h2>
            </div>
        </Link>
    );
}

export default Card;
