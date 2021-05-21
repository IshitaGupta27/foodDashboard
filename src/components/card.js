import { useSelector } from "react-redux";

const Container = () => {
    const dishes = useSelector((state) => state.allDish.dish);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 border bg-light"> 
                    Side Bar 
                </div>
                <div className="col-6 p-3 border">
                    <h1>Available Dishes</h1> <br/>
                    <div style={{display:'flex', alignContent:'center'}}>
                        {/*{List}*/}
                            {dishes.map((dish,index) => (
                                <Card Dish={dish} key={index} />
                            ))}
                    </div>
                </div>
                <div className="col p-3 border bg-light"> 
                    Side Bar 
                </div>
            </div>
        </div>
    );
}

const Card = (props) => {
    const {dishName, proteins, carbs, fats} = props.dish;
        
    return (
        <>
            <div className="card" style={{width:'18rem'}}>
                {/* <img src="../logo192.png" className="card-img-top" alt="picture" />  */}
                <h5 className="card-title">{dishName}</h5>
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

export default Container;