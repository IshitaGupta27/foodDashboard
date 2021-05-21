import { useSelector } from "react-redux";
import AddDish from "./addDish";

const AllDishes = () => {
    const dishes = useSelector((state) => state.allDish.dish);
    //console.log(dishes);
    return (
        <>
            {/* <div className="col-2"></div> */}
            <div className="col">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="table-light">
                            <tr>
                                <th scope="col"> </th>
                                <th scope="col">Dish</th>
                                <th scope="col">Proteins</th>
                                <th scope="col">Carbs</th>
                                <th scope="col">Fats</th>
                                <th scope="col">Calories</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dishes.map((dish, index) => (
                                <TableRow Dish={dish} key={index}/>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <button type="button" className="btn btn-info" >Add Dish</button> &nbsp;
                <button type="button" className="btn btn-info">Delete Dish</button> 
            </div>
            <AddDish/>
            {/* <div className="col-2"></div> */}
        </>
    );
}

const TableRow = (props) => {
    const {dishName, proteins, carbs, fats} = props.Dish;
    return (
        <>
            <tr>
                <td><input className="form-check input" type="checkbox"/></td>
                <td>{dishName}</td>
                <td>{proteins}</td>
                <td>{carbs}</td>
                <td>{fats}</td>
                <td className="table-info">{proteins*4 + carbs*4 + fats*9}</td>
                <td><button type="button" className="btn btn-light">Edit</button></td>
            </tr>
        </>
    );
}

export default AllDishes;