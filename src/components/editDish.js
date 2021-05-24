import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddDish from "./addDish"

const EditDish = (props) => {
    
        
            
                // if(props.location.state.dish != undefined ){
                //     return (
                //         <div>
                //             Redirecting in 3...2..1
                //         </div>
                //     )
                // } else {
                    return (
                        <div className="container mt-4">
                            <button className="btn btn-dark">
                                <Link to="/admin" style={{color:'white', textDecoration:'none'}}>Back</Link></button>
                            <AddDish dish={props.location.state} />
                            <ToastContainer />
                        </div>
                    )
                // }

            

        

    
}

export default EditDish;