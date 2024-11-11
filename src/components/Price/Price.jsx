import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const Price = ({option}) => {
    const {name , price , currency , duration , features} = option
    return (
        <div className='bg-blue-600 p-8 m-4 rounded-xl text-white text-center'>
            <span className='text-xl font-semibold'>Price : {price}$</span>
            <span className='font-semibold'>/{duration}</span>
            <h2 className='font-bold text-5xl my-4'>{name}</h2>
            {
                features.map((feature , idx) => <Feature key={idx} feature = {feature}></Feature>)
            }
        </div>
    )
}

Price.propTypes = {}

export default Price