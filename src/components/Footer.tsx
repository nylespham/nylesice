export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top bg-dark">

                <div className="col-md-4 d-flex align-items-center text-light">Nyles Pham</div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#github"/></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#linkedin"/></svg></a></li>
                </ul>
                
            </footer>
        </>
    )
}