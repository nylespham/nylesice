import "../assets/style.css";

export default function Nav(){
    return (
        <div className="container ">
            <header className="d-flex flex-wrap justify-content-center py-2 mb-1">
            <a href="/" className="d-flex align-items-center me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="32" height="32"><use xlinkHref="#bootstrap"/></svg>
                <span className="fs-4">Nyles Pham</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Projects</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
            </ul>
            </header>
        </div>
    )
}