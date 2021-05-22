import {Link} from 'react-router-dom';

import AddDish from "./addDish"

const EditDish = (props) => {
    return (
        <div className="container">
            <div className="btn btn-default">
                <Link to="/admin">Back</Link></div>
            <AddDish dish={props.location.state} />
        </div>
    )
}

export default EditDish;