import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({ feature }) => {
    return (
        <div className='flex items-center my-2 py-2'>
            
       <CheckCircleIcon className="h-6 w-6 text-bla ck-500 mx-2" />
            <span className='text-decoration-none text-2xl'>
             {feature}</span>
        </div>
    );
};

export default Features;