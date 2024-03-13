import { NavLink } from "react-router-dom";

export default function Nav(){
    return (
        <div className="bg-light">
            <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-2 mb-1">
            <a href="/" className="d-flex align-items-center me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4">Nyles Pham</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to={"/"} className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink to={"/about"} className="nav-link">About</NavLink></li>
                <li className="nav-item"><NavLink to={"/projects"} className="nav-link">Projects</NavLink></li>
                <li className="nav-item"><NavLink to={"/contact"} className="nav-link">Contact</NavLink></li>
            </ul>
            </header>
            </div>
        </div>
    )
}