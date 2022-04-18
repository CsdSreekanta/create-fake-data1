import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            <h2>product id:{id}</h2>
            <h3>Buy this item for your body care:{name}</h3>
            <p>Selling price:${price}</p>
        </div>
    );
};

export default Cosmetic;