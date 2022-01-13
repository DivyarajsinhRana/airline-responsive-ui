import {SearchOutlined } from "@material-ui/icons"
import Filter from "../filter/Filter"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    LOGO
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-item" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><span className="sr-only">Home</span></a>
                        </li>
                    </ul>
                    <div className="d-flex mx-3">
                        <Filter/>
                    </div>
                    <div>
                        <form className="form-inline my-2 my-lg-0 d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark my-2 my-sm-0 mx-2" type="submit"><SearchOutlined/></button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
