import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria'

function App() {
    return (
        <>

            <BrowserRouter>
                <Navbar />
                <div className="min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/categoria" element={<ListaCategoria />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;