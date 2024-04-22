export default function About(){
    return (
        <>
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
            <h1 className="display-5 fw-bold text-white">About me</h1>
            <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4">I'm been working as DevOps Engineer for 3 years. My passion for building and shipping software is undefeatable. 
                Besides work, I also help my personal clients meet their business expectations on achieving operation, management, productivit. My longterm goal is to become Platform Engineer  </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a type="button" target="_blank" href="https://www.linkedin.com/in/nyles-pham-3a06a2188/" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">My LinkedIn</a>
                <a type="button" target="_blank" href="https://www.notion.so/nylespham/Nyles-Pham-2c39011111ce48f5b5b1db56ca819197?pvs=4" className="btn btn-outline-light btn-lg px-4">My Resume</a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}