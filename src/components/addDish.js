import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    useDispatch
} from 'react-redux';

const AddDish = (props) => {
    const [dishDetails, setDishDetails] = useState({
        id: uuidv4(),
        dishName: "",
        carbs:"",
        proteins:"",
        fats: ""
    })

    const [isEdit, setIsEdit] = useState(false);

    useEffect(()=>{
        if(props.dish!==undefined){
            const {id, dishName, carbs, proteins, fats} = props.dish;
            setDishDetails({
                id,
                dishName,
                carbs,
                proteins,
                fats
            })
            setIsEdit(id===undefined?false:true)
        }

    },[props])
    

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
      

        // dispatch redux action
        if(isEdit){
            dispatch({type: "EDIT_DISH", payload: dishDetails});
            toast("Dish edited");          
        } 
        else {
            dispatch({type: "ADD_DISH", payload: dishDetails});
            toast("Dish Added");
        }


            }



    return (
        <>
            {/*{JSON.stringify(dishDetails)}*/}
            <div className="container mb-4 mt-4 card p-4">
            <form>
                <div className="mb-3">
                    <label htmlFor="dishname" className="form-label" >Dish Name : </label>
                    <input 
                        type="text" 
                        value={dishDetails.dishName}
                        className="form-control" id="dishname" name="dishName" onChange={handleInput("dishName")} required/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="proteins" className="form-label">Amount of proteins present : </label>
                    <input 
                        type="number" 
                        value={dishDetails.proteins}
                        className="form-control" id="proteins"
                        onChange={handleInput("proteins")}
                        required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fats" className="form-label">Amount of fats present : </label>
                    <input type="number"
                        value={dishDetails.fats}
                        className="form-control" id="fats" onChange={handleInput("fats")} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="carbs" className="form-label">Amount of carbohydrates present : </label>
                    <input type="number" 
                        value={dishDetails.carbs}
                        className="form-control" id="carbs" onChange={handleInput("carbs")} required/>
                </div>
                <div className="mb-3">
                <button 
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    {
                        isEdit?"Save Changes": "Add"
                    }
                </button>
                </div>
                
            </form>
            </div>
            <ToastContainer />
        </>
    );
}

export default AddDish;