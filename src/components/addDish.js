import React, {useState} from 'react';

import {
    useDispatch
} from 'react-redux';

const AddDish = () => {
    const [dishDetails, setDishDetails] = useState({
        dishName: "",
        carbs:"",
        proteins: "",
        fats: ""
    })
    // const [dishName, setDishName] = useState("");
    // const [proteins, setProteins] = useState("");
    // const [carbs, setCarbs] = useState("");
    // const [fats, setFats] = useState("");
    const handleInput = (name) => (event) =>{
        

        console.log([name]+"---"+event.target.value);
        setDishDetails({
            ...dishDetails,
            [name]: event.target.value
        })
    }

    const dispatch = useDispatch();

    const handleSubmit = (event) =>{
        event.preventDefault();
        // const validInput = validateInputs(dishDetails);
        alert("form submitted: " + JSON.stringify(dishDetails));

        // dispatch redux action
        dispatch({type: "ADD_DISH", payload: dishDetails})
            }



    return (
        <>
            {JSON.stringify(dishDetails)}
            <form>
                <div className="mb-3">
                    <label htmlFor="dishname" className="form-label" >Dish Name : </label>
                    <input type="text" className="form-control" id="dishname" name="dishName" onChange={handleInput("dishName")} required/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="proteins" className="form-label">Amount of proteins present : </label>
                    <input 
                        type="number" 
                        className="form-control" id="proteins"
                        onChange={handleInput("proteins")}
                        required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fats" className="form-label">Amount of fats present : </label>
                    <input type="number" className="form-control" id="fats" onChange={handleInput("fats")} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="carbs" className="form-label">Amount of carbohydrates present : </label>
                    <input type="number" className="form-control" id="carbs" onChange={handleInput("carbs")} required/>
                </div>
                <button 
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >Submit</button>
            </form>
        </>
    );
}

export default AddDish;