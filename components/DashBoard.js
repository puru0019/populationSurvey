import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { overAllPopulation, populationPerGender } from '../js/data';

const overAllPopData = overAllPopulation;
const genderData = populationPerGender;

class DashBoard extends Component {    
  render() {
    return (
    <div>
      <h2 className="dashboardTitle">Over All Population</h2>
      <BarChart width={600} height={300} data={overAllPopData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="County"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Population" fill="#8884d8" />
       <Bar dataKey="Population MOE" fill="#82ca9d" />
       <Bar dataKey="Uninsured" fill="#f4aa42" />
       <Bar dataKey="Uninsured MOE" fill="#d63147" />
      </BarChart>
      <h2 className="dashboardTitle">Insured and UnInsured per gender</h2>
      <BarChart width={600} height={300} data={genderData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="County"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Male" stackId="a" fill="#8884d8" />
       <Bar dataKey="Male - Uninsured" stackId="a" fill="#82ca9d" />
       <Bar dataKey="Female" stackId="b" fill="#f4aa42" />
       <Bar dataKey="Female - Uninsured" stackId="b" fill="#d63147" />
      </BarChart>
    </div>
    );
  }
}

export default DashBoard;