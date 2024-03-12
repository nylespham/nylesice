
export default function Home(){
    return (
        <div className="px-4 py-5 my-5 text-center bg-light">
            <img className="d-block mx-auto mb-4" src="../assets/images/nyles.jpeg" alt="" width="72" height="57"/>
            <h1 className="display-5 fw-bold text-body-emphasis">I'm Nyles Pham</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">A Software Developer that's currently performing both DevOps and Development workloads</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">My Projects</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Go to Profile</button>
                </div>
            </div>
        </div>
    )
}