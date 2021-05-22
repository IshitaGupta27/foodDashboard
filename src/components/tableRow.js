const TableRow = (props) => {
    const {id, dishName, proteins, carbs, fats} = props.Dish;

    const editDish = () => {
        
            props.location.history.push({
              pathname: '/edit',
              state: props.Dish
            });      
        
    }
    return (
        <>
            <tr>
                <td className="text-center text-capitalize">
                    <input 
                        className="form-check input" 
                        value={id}
                        type="checkbox"
                        onClick={()=>console.log(id)}

                    />
                </td>
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
                
            </tr>
        </>
    );
}

export default TableRow;