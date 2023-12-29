import React, { useEffect, useState } from 'react';
import Pricecard from '../PriceCard/Pricecard';

const Pricelist = () => {
    const [price, setPrice] = useState([])
    useEffect(() => {
        fetch('pricelist.json')
        .then(res => res.json())
        .then(data => setPrice(data))
    }, [])
    return (
      
        <div className='md:columns-3 gap-3 mt-4'>
            {
                price.map(price => <Pricecard key={price.id} price={price}></Pricecard>)
            }
        </div>
    );
};

export default Pricelist;