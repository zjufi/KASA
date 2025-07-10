import Banniere from '../components/banner'
import bgImg from '../assets_images/home-banner.jpg'
import {Link} from 'react-router-dom'
import Card from '../components/card'

import logements from '../data/logements.json'
const Home = () => {
    console.log(logements)
    return (
        <div className="main">
            <Banniere image={bgImg} title="Chez vous, partout et ailleurs" />
            <section className="gallery">
                {logements.map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))}
            </section>
        </div>
    )
}
export default Home
