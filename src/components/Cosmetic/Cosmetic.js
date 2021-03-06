import React from 'react';
import { addToDb } from '../Utilities/MealDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
        addToDb(id)
    }
    const addToCartWithParam =() =>addToCart(id)
    return (
        <div className='product'>
            <h2>product id:{id}</h2>
            <h3>Buy this item for your body care:{name}</h3>
            <p>Selling price:${price}</p>
            <button onClick={addToCartWithParam}>Add to Cart</button>
           
        </div>
    );
};

export default Cosmetic;