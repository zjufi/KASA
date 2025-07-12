
import Banniere from '../components/banner'
import bgImg from '../assets_images/apropos-banner.jpg'
import Collapse from '../components/collapse.jsx'

const AboutTxt = () => [
    {
        title: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont reprises de sources fiables."
    },
    {
        title: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        content: "La qualité de notre service est la priorité de Kasa. Nos agents se tiennent à votre disposition pour vous fournir une expérience parfaite. Les annonces postées sur Kasa garantissent une fiabilité totale." 
    },
    {
        title: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité et aux normes de la loi."
    }
]

function About() {
    return (
        <div className="main">
            <Banniere image={bgImg} />
            <div className="collapse-wrapper">
                {AboutTxt().map((txt) => (
                    <Collapse key={txt.title} title={txt.title} children={txt.content} />
                ))}
            </div>
        </div>
    )
}
export default About