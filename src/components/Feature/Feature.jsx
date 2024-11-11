import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center gap-4 my-2'>
            <FaCheckCircle />
            <p className='text-wrap text-left'>{feature}</p>
        </div>
    )
}

Feature.propTypes = {}

export default Feature