import React from 'react'
import PropTypes from 'prop-types'
import Price from '../Price/Price'

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "1 group fitness class per week",
                "1 guest pass per month"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "Unlimited group fitness classes",
                "5 guest passes per month",
                "Access to sauna and steam room",
                "Free personal trainer consultation"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 79.99,
            "currency": "USD",
            "duration": "Monthly",
            "features": [
                "24/7 access to gym facilities",
                "Locker room with towel service",
                "Unlimited group fitness and yoga classes",
                "Unlimited guest passes",
                "Access to sauna, steam room, and pool",
                "Monthly personal trainer session",
                "Nutrition and meal planning consultation"
            ]
        },
        {
            "id": 4,
            "name": "Annual",
            "price": 499.99,
            "currency": "USD",
            "duration": "Yearly",
            "features": [
                "All features from Premium package",
                "Additional discounts on merchandise",
                "Priority booking for classes",
                "Free parking",
                "10% off personal trainer packages"
            ]
        }
    ]

    return (
        <div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                {
                    priceOptions.map((price, idx) => <Price key={idx} option={price}></Price>)
                }
            </div>
        </div>
    )
}

PriceOptions.propTypes = {}

export default PriceOptions