export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-4 bg-dark">

            <div className="col-md-4 d-flex align-items-center text-light">Nyles Pham</div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a target="_blank" className="text-body-secondary" href="https://github.com/nylespham"><svg className="bi" width="24" height="24"><use xlinkHref="#github"/></svg></a></li>
                <li className="ms-3"><a target="_blank" className="text-body-secondary" href="https://www.linkedin.com/in/nyles-pham-3a06a2188/"><svg className="bi" width="24" height="24"><use xlinkHref="#linkedin"/></svg></a></li>
            </ul>
            
        </footer>
    )
}