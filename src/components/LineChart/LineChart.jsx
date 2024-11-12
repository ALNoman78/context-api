// import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
import {BarChart, Bar,Cell,XAxis, YAxis, CartesianGrid, Tooltip,Legend,LabelList, ResponsiveContainer,} from 'recharts';
import React from 'react'
import PropTypes from 'prop-types'

const LineChart = (props) => {

    const studentsData = [
        { id: 1, name: "Noman", mathMarks: 78, physicsMarks: 82, chemistryMarks: 75 },
        { id: 2, name: "Maisa", mathMarks: 85, physicsMarks: 89, chemistryMarks: 80 },
        { id: 3, name: "Moule", mathMarks: 92, physicsMarks: 94, chemistryMarks: 91 },
        { id: 4, name: "Nion", mathMarks: 74, physicsMarks: 70, chemistryMarks: 78 },
        { id: 5, name: "Mahfuj", mathMarks: 88, physicsMarks: 85, chemistryMarks: 86 },
        { id: 6, name: "Soyab", mathMarks: 81, physicsMarks: 79, chemistryMarks: 83 },
        { id: 7, name: "Dhoni", mathMarks: 90, physicsMarks: 92, chemistryMarks: 89 },
        { id: 8, name: "Star", mathMarks: 76, physicsMarks: 74, chemistryMarks: 77 },
        { id: 9, name: "man", mathMarks: 84, physicsMarks: 88, chemistryMarks: 82 },
        { id: 10, name: "woman", mathMarks: 79, physicsMarks: 81, chemistryMarks: 78 }
    ];

    return (
        <div>
            <BarChart width={800} height={400} data={studentsData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Bar dataKey='mathMarks' fill='#8884d8'></Bar>
                <Bar dataKey='physicsMarks' fill="#82ca9d"></Bar>
                <Bar dataKey='chemistryMarks' fill='steelblue'></Bar>
            </BarChart>
        </div>
    )
}

LineChart.propTypes = {}

export default LineChart