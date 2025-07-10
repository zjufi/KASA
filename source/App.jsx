import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/about';
import Logement from './pages/Logements';
import Error from './pages/404';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/logement/:id/*" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}




export default App
