import React from 'react'
import '../style/404.scss'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous recherchez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
        
    )
}   

export default Error