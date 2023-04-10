import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const Statistics = () => {
    // const assignments=useLoaderData();
    // console.log(assignments);
    const assignments=[
        { id: "a123", assignmentTitle: "Simple HTML Project", assignmentMark: 60, assignmentNo: 1, fill: "#ca8a04" },
        { id: "b456", assignmentTitle: "Responsive Architect Website", assignmentMark: 60, assignmentNo: 2, fill: "#65a30d" },
        { id: "c789", assignmentTitle: "Tech Landing Page Using CSS Framework", assignmentMark: 60, assignmentNo: 3, fill: "#e11d48" },
        { id: "d012", assignmentTitle: "Basic JavaScript Problem Solving", assignmentMark: 60, assignmentNo: 4, fill: "#7c3aed" },
        { id: "e345", assignmentTitle: "Geometry Genius Assignment", assignmentMark: 60, assignmentNo: 5, fill: "#84cc16" },
        { id: "f678", assignmentTitle: "AI Universe API and ES6", assignmentMark: 60, assignmentNo: 6, fill: "#eab308" },
        { id: "g901", assignmentTitle: "Devtool and debugging", assignmentMark: 60, assignmentNo: 7, fill: "#dc2626" },
        { id: "h234", assignmentTitle: "Knowledge Cafe Using React", assignmentMark: 60, assignmentNo: 8, fill: "#22d3ee" }
      ]
      
    // const style = {
    //     top: '50%',
    //     right: 0,
    //     transform: 'translate(0, -50%)',
    //     lineHeight: '24px',
    //   };
    return (
        // <div>
        //    <ResponsiveContainer width="100%" height="100%">
        //     <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={assignments}>
        //         <RadialBar
        //          minAngle={15}
        //          label={{ position: 'insideStart', fill: '#fff'}}
        //          background
        //          clockWise
        //          dataKey="assignmentMark"
        //         />
        //         <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        //     </RadialBarChart>
        //    </ResponsiveContainer>
        // </div>
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart 
                 width={500}
                 height={400}
                 data={assignments}
                 margin={{
                   top: 20,
                   right: 20,
                   bottom: 20,
                   left: 20,
                 }}
                >
                <CartesianGrid stroke="#ef4444" />
                <XAxis dataKey="assignmentTitle" scale="band"/>
                <YAxis/>
                <Tooltip></Tooltip>
                <Legend></Legend>
                {/* <Area type="monotone" dataKey="assignmentTitle" fill="#84cc16" stroke="#22d3ee" /> */}
                <Bar dataKey="assignmentMark" barSize={20} fill="#9333ea" />
                {/* <Scatter dataKey="cnt" fill="red" /> */}
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;