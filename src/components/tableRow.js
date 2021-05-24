import {useDispatch} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableRow = (props) => {
    const {dishName, proteins, carbs, fats} = props.Dish;

    const editDish = () => {
        
            props.location.history.push({
              pathname: '/edit',
              state: props.Dish
            });      
        
    }

    const dispatch = useDispatch();
    const deleteDish = () => {
        dispatch({type: "DELETE_DISH", payload: props.Dish});
        toast("Dish deleted");
    }
    return (
        <>
            <tr>
                {/* <td>{id}</td> */}
                <td className="text-center text-capitalize">{dishName}</td>
                <td className="text-center text-capitalize">{proteins}</td>
                <td className="text-center text-capitalize">{carbs}</td>
                <td className="text-center text-capitalize">{fats}</td>
                <td className="table-info text-center text-capitalize">{proteins*4 + carbs*4 + fats*9}</td>
                <td className="text-center text-capitalize">
                    <button 
                        type="button"
                        className="btn btn-warning"
                        onClick={()=>editDish()}
                    >Edit</button>
                </td>
                <td className="text-center text-capitalize">
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => deleteDish()}
                    >Delete Dish</button> 
                </td>
                
            </tr>
            <ToastContainer />
        </>
    );
}

export default TableRow;