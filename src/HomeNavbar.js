import {Link} from 'react-router-dom';

//change <Link></Link> to <Link></Link>
//change href="#" to to="/"
function HomeNavbar(){
    return(
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FANTASTIC BLINKS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/User">UserHome </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/Username">Welcome</Link>
                        </li>
                    </ul>
                   
          
                </div>
            </div>
        </nav>
    </div>
    )
}
export default HomeNavbar;