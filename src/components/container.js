import { useSelector } from "react-redux";

import Card from './card';
import NavBar from './navBar';

const Container = () => {
    const dishes = useSelector((state) => state.allDish.dish);
    
    return (
        <>
        <NavBar />
        <div className="container-fluid" style={{minHeight:'100vh'}}>
            <div className="row" style={{height: '100vh'}}>
                {/* <div className="col p-3 border bg-light"> 
                    Side Bar 
                </div> */}
                <div className="col p-3 border">
                    <h1 className="text-center">Available Dishes</h1> <br/>
                    
                    <div className="col-md-12 row">
                        {/*{List}*/}
                            {dishes.map((dish,index) => (
                                <Card Dish={dish} key={index} />
                            ))}
                    </div>
                </div>
                {/* <div className="col p-3 border bg-light"> 
                    Side Bar 
                </div> */}
            </div>
        </div>
        </>
    );
}



export default Container;