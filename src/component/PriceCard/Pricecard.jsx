import React from 'react';
import Features from '../Features/Features';

const Pricecard = ({price}) => {
    return (
        <div className='bg-indigo-400 px-4 py-4 rounded-lg mx-4 my-3 '>
            <h1 className='text-center'>
                <span className='text-5xl text-ultrabold text-purple-800 '>{price.price}</span><span className='text-2xl'>/month</span></h1>
            <h2 className='mb-4 text-center'>
                <span className='text-4xl text-bold-500 text-center'>{price.name}</span>
            </h2>
            <p className='underline text-2xl'>Features:</p>
            {
                price.features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
            }

            <button className='w-full py-4 rounded-lg text-2xl text-white bg-purple-800'>Buy Now</button>
        </div>
    );
};

export default Pricecard;