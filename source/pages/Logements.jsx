import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logements from '../data/logements.json';
import Collapse from '../components/collapse';
import '../style/logement.scss';
import Carrousel from '../components/carroussel';

function Logement() {
    const { id } = useParams();
    const log = logements.find((logement) => logement.id === id);

    if (!Logement) {
        return <Error />;
    }
    const erreur = '/404';

    
    const navigate = useNavigate();

    useEffect(() => {
        if (!log) navigate(erreur);
    }, [log]);
    const renderRatingStars = (rating) => {
        const stars = [];
        const maxRating = 5;
        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <span key={i} className={i <= rating ? 'star filled' : 'star empty'}>
                    ★
                </span>,
            );
        }
        return stars;
    };
    return (
        <div className="logement">
            {
                log &&
                <div className="logement-container">
                    <div className="logement-image">
                        <Carrousel images={log.pictures} />
                    </div>
                    <div className="logement-content">
                        <div className="logement-header">
                            <h1>{log.title}</h1>
                            <p>{log.location}</p>
                            <div className="logement-tags">
                                {log.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className='logement-host-rating'>
                            <div className="logement-host">
                                <p>{log.host.name}</p>
                                <img
                                    src={log.host.picture}
                                    alt={log.host.name}
                                    className="host-picture"
                                />
                            </div>
                            <div className="logement-rating">
                                {renderRatingStars(parseInt(log.rating))}
                            </div>
                        </div>
                    </div>
                    <div className="logement-collapse">
                        <Collapse title="Description">{log.description}</Collapse>
                        <Collapse title="Équipements">
                            <ul>
                                {log.equipments.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </Collapse>
                    </div>
                </div>
            }
        </div>
    );
}

export default Logement;