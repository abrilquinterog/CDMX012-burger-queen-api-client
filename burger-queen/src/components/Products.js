import {useState, useEffect} from "react";
import { getProducts } from "../utils";
import "./Products.css";


const Products = () =>{
    const [products, setproducts] = useState([]);

    useEffect(()=> {
        getProducts().then(setproducts);
    }, []);


    return(
        <>
        <div className="productContainer">
        {products.map((product)=> (
            <div className="productCard">
            <div className="productHeader">
            <p>{product.name}</p>
            <p>${product.price}</p>
            </div>
            <div className="imageContainer"><img className='img' src={product.image} alt='' /></div>
        </div>
        ))}
        </div>
        </>

    );
};

export default Products;