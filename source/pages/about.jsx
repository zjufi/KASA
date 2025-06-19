
import Banniere from '../components/banner'
import bgImg from '../assets_images/apropos-banner.jpg'
import Collapse from '../components/collapse.jsx'

const About = () => {
    return (
        <div  className="main">
            <Banniere image={bgImg}  />
            <div className ="collapse-wrapper"> 
                <Collapse title="Fiabilité" > 
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont reprises de sources fiables.</Collapse>
                <Collapse title="Respect" > 
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. </Collapse>
                <Collapse title="Service" > 
                   La qualité de notre service est la priorité de Kasa. Nos agents se tiennent à votre disposition pour vous fournir une expérience parfaite. Les annonces postées sur Kasa garantissent une fiabilité totale. 
                </Collapse>
                <Collapse title="Sécurité" > 
                 La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité et est classifié par nos services. 
                </Collapse> 
            </div>
        </div>
        

    )
}

export default About