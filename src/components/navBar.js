import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-light" style={{backgroundColor:'antiquewhite'}}>
            <div style={{display:'flex'}}>
            <div className="container">
                <Link to="/" className="navbar-brand mb-0 mx-0 h1">User </Link>
            </div>
            <div className="container">
                <Link to="/admin" className="navbar-brand mb-0 mx-0 h1">Admin </Link>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;