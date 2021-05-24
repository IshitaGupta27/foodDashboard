import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [dishName, setDishName] = useState("");
    const {keyword} = useSelector(state=>state.filter);
    const handleInput = (event) =>{
        event.preventDefault();
        setDishName(event.target.value);
        console.log(dishName);
    }
    const dispatch = useDispatch();
    const searchDish = (event) => {
        event.preventDefault();
        dispatch({type: "SEARCH_DISH", payload: {keyword: dishName}});
        setDishName("");
    }

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
            <div className="d-flex">
                {
                    keyword!==null? (
                    //     <span className="badge rounded-pill bg-info text-light pt-2" onClick={()=>dispatch({type: "REMOVE_FILTER"})}>
                    //     {keyword}
                    // </span>
                    <button type="button" className="badge rounded-pill bg-info text-light no-border" onClick={()=>dispatch({type: "REMOVE_FILTER"})}>
                            {keyword} &nbsp;
                            <span className="badge bg-secondary ml-2">X</span>
                    </button>
                    ): ""
                }

                <form className="d-flex mx-4">
                    <input 
                    className="form-control me-2" 
                    value={dishName}
                    type="text" id="item" name="item" placeholder="Search" aria-label="Search" onChange={handleInput} />
                    <button className="btn btn-dark" type="submit" onClick={searchDish}>Search</button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;