import React from 'react';
import { render } from 'react-dom';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const Statistics = () => {
    
  const data = [
    { name: 'Assignment-1', value: 60 },
    { name: 'Assignment-2', value: 60 },
    { name: 'Assignment-3', value: 30 },
    { name: 'Assignment-4', value: 53 },
    { name: 'Assignment-5', value: 60 },
    { name: 'Assignment-6', value: 56 },
    { name: 'Assignment-7', value: 60 },
    
  ];
  
   
    
      return (
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart title='This is my assignment marks'>
              <Pie dataKey="value" data={data} fill="#8884d8" label />
            </PieChart>
            </ResponsiveContainer>
        </div>
      );
    };


  


export default Statistics;