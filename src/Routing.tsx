import { Link, Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import Calculation from "../src/Calculation";
import Gallery from "../src/Gallery";
import Food from "./Food";
import "./style.scss"
import WorkoutRoutine from "./WorkoutRoutine";

interface Link {
    path: string;
    name: string;
    className?: string;
}

const Routing = () => {
    const currentPath = useLocation().pathname;
    
    let links: Link[] = [
        { path: '/home', name: 'בית' },
        { path: '/gallery', name: 'גלריה' },
        { path: '/calculation', name: 'חישוב' },
        { path: '/food', name: 'תפריט תזונה' },
        { path: '/workoutroutine', name: 'תכנית אימונים' },

    ];

    // highlight current path
    links = links.map(link => {
        if (link.path === currentPath) {
            return { ...link, className: 'active' };
        }
        return link;
    });

    return (
        <div className="site-wrapper">
            <div className="top-bar">
                {links.map(link => (
                    <Link key={link.path} to={link.path} className={link?.className || ''}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<App />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/calculation" element={<Calculation />} />
                <Route path="/food" element={<Food />} />
                <Route path="/workoutroutine" element={<WorkoutRoutine />} />

            </Routes>
        </div>
    )
}

export default Routing;