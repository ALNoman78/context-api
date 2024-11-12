import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phone, setPhone] = useState([])

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phones => {
                    const obj = {
                        name: phones.phone_name,
                        price: parseInt(phones.slug.split("-")[1])
                    }
                    return obj;
                })
                // console.log(phonesWithFakeData);
                setPhone(phonesWithFakeData)
            })
    }, [])
    return (
        <div>
            <h3 className='text-5xl font-bold text-center'>Phone : {phone.length}</h3>
                <BarChart width={1800} height={400} data={phone}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
        </div>
    )
}

Phones.propTypes = {}

export default Phones