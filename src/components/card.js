const Card = (props) => {
    const {dishName, proteins, carbs, fats} = props.Dish;
        
    return (
        <>
            <div className="card col-md-5 mx-auto mb-4" >
                {/* <img src="../logo192.png" className="card-img-top" alt="picture" />  */}
                <h5 className="card-title text-center">{dishName}</h5>
                <div>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PROTEINS</td>
                                    <td>{proteins}</td>
                                </tr>
                                <tr>
                                    <td>FATS</td>
                                    <td>{fats}</td>
                                </tr>
                                <tr>
                                    <td>CARBOHYDRATES</td>
                                    <td>{carbs}</td>
                                </tr>
                                <tr className="table-info">
                                    <td>CALORIES</td>
                                    <td>{proteins*4 + carbs*4 + fats*9}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </>
    )

}

export default Card;