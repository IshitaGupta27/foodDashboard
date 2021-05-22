import {useState} from 'react';
import { useSelector } from "react-redux";
import AddDish from "./addDish";
import NavBar from './navBar';
import TableRow from './tableRow';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const AllDishes = (props) => {
    const [showForm, setShowForm] = useState(false);
    const dishes = useSelector((state) => state.allDish.dish);

    const [isEdit, setIsEdit] = useState(false);
    const editDish = (dish)=>{
        setIsEdit(true);

        return isEdit?<AddDish Dish={dish} />:<AddDish />
    }

    return (
        <>
            <NavBar />
            {/* <div className="col-2"></div> */}
            <div className="container col mt-4">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col"> </th>
                                {/* <th scope="col" className="text-center text-capitalize">id</th> */}
                                <th scope="col" className="text-center text-capitalize">Dish</th>
                                <th scope="col" className="text-center text-capitalize">Proteins</th>
                                <th scope="col" className="text-center text-capitalize">Carbs</th>
                                <th scope="col" className="text-center text-capitalize">Fats</th>
                                <th scope="col" className="text-center text-capitalize">Calories</th>
                                <th scope="col" className="text-center text-capitalize"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dishes.map((dish, index) => (
                                <TableRow 
                                    Dish={dish} 
                                    key={index}
                                    location={props}
                                    
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <div className="container">
                    
                <button type="button" className=" mx-auto btn btn-info" onClick={() => setShowForm(!showForm)}>Add Dish</button> &nbsp;
                <button type="button" className="btn btn-danger">Delete Dish</button> 
                </div> 
            </div>
            {
                showForm && <AddDish />
            }
            {/* <div className="col-2"></div> */}
        </>
    );
}

export default AllDishes;