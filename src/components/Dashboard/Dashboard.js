import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';
import bootstrap from 'bootstrap';


const Dashboard = () => {
    const [dashboard, setDashboard] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDashboard(data))
    }, [])
    return (
        <div className='parent'>
            <div className='row row-cols-1 row-cols-md-2 g-5 mt-3 mb-5 container mx-auto'>
                <div>
                    <h3>MONTH WISE SELL</h3>
                    <LineChart width={350} height={350} data={dashboard}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="month" stroke="#8884d8" />
                        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    </LineChart>
                </div>

                <div>
                    <h3>Investment VS Revenue</h3>
                    <AreaChart
                        width={350}
                        height={350}
                        data={dashboard}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

                    </AreaChart>
                </div>
                <div>
                    <h3>Bar Chart</h3>
                    <BarChart width={350} height={350} data={dashboard}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div>
                    <h3>Pie Chart</h3>
                    <PieChart width={350} height={600}>
                        <Pie
                            data={dashboard}
                            dataKey="investment"
                            cx={200}
                            cy={200}
                            outerRadius={60}
                            fill="#8884d8"
                        />
                        <Pie
                            data={dashboard}
                            dataKey="revenue"
                            cx={200}
                            cy={200}
                            innerRadius={70}
                            outerRadius={90}
                            fill="#82ca9d"
                            label
                        />
                    </PieChart>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;