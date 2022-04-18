import React from 'react';

const Cosmetics = () => {

    const cosmetics =[
        {id:1, name:'malish', price:1000},
        {id:2, name:'palish', price:1000},
        {id:3, name:'Jalish', price:1000},
        {id:4, name:'Ealish', price:1000},
        {id:5, name:'talish', price:1000},
        {id:6, name:'lalish', price:1000},
    ]
    return (
        <div>
            {
                cosmetics.map(cosmetic => console.log(cosmetic))
            }
        </div>
    );
};

export default Cosmetics;