export default function Contact(){
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Please contact me</h1>
                <p className="col-lg-10 fs-4">I'm always welcome to discuss about job opportunity and business. It will take 1-2 business days for me to reach out back to you. </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Mobile</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Message</label>
                </div>
                <div className="checkbox mb-3">
                </div>
                <button className="w-100 btn btn-lg btn-dark" type="submit">Send Message</button>
                <hr className="my-4"/>
                </form>
            </div>
            </div>
        </div>
    )
}