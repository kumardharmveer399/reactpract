import react from "react";
import './App.css';
import {
    Routes
} from "react-router-dom";
import { Route } from "react-router";
import About from "./About"
import Home from "./Home"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Constitution from "./Constitution";
import Features from "./Features";
import Magzine from "./Magzine";
import Login from "./Login";
import Footer from "./Footer";
import Blog from "./Blog.jsx";
import Department from "./Department";
import Team from "./Team";
function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="constitution" element={<Constitution />} />
                <Route path="about" element={<About />} />
                <Route path="features" element={<Features />} />
                <Route path="login" element={<Login />} />
                <Route path="magzine" element={<Magzine />} />
                <Route path="team" element={<Team />} />
                <Route path="department" element={<Department />} />
                <Route path="blog" element={<Blog />} /> 
            </Routes>

            <Footer />

        </>
    )
}

export default App;
