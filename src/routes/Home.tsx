import ProjectDisplay from "../components/ProjectDisplay";
import About from "./About";
import message from "../assets/images/code.png";

export default function Home(){
    return (
        <>
        <div className="px-4 py-5 my-5 text-center bg-light">
            <img style={{"height": "36px","width": "36px"}} src={message} alt="" width="72" height="57"/>
            <h1 className="display-5 fw-bold text-body-emphasis">I'm Nyles Pham</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">A Cloud DevOps Engineer that's currently working on both DevOps and Development roles</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">My Projects</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Go to Profile</button>
                </div>
            </div>
        </div>
        <About />
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">My Projects</h1>
              <p className="lead text-body-secondary">Beside work, I also build my personal projects that tackle on real world problems.</p>
              <p>
                <a href="#" className="btn btn-dark my-2">More Details</a>
              </p>
            </div>
          </div>
        </section>
        
        <ProjectDisplay />
        </>
    )
}