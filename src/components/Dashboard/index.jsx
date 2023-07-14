import React from 'react'
import ChartCard from '../Chart/ChartCard'
import DashboardWrapper from './DashboardWrapper'

import { 
    Tooltip, BarChart, 
    XAxis, YAxis, CartesianGrid, Legend, Bar,
} from 'recharts';
import TimeMachineChart from '../Chart/TimeMachineChart';
import VoltageChart from '../Chart/VoltageChart';
import AmpereChart from '../Chart/AmpereChart';
import ProductionGraphChart from '../Chart/ProductionGraphChart';
import TopFrequencyChart from '../Chart/TopFrequencyChart';
const data01 = [
    { name: 'Stop Line', value: 400, fill: '#DC3545' },
    { name: 'Idle', value: 300, fill: '#28A745' },
    { name: 'Running', value: 300, fill: '#F1BE42' },
];
const dataBar = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div className='w-full max-h-screen h-screen text-white'>
        <DashboardWrapper>
            <TimeMachineChart />
            <ChartCard title={'Layout Machine Area'}>
            </ChartCard>
            <ChartCard title={'Maintenance'}>
            </ChartCard>

            <ChartCard title={'Machine Activity'} sortType={'Daily'}>
            <BarChart
                    width={500}
                    height={300}
                    data={dataBar}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="uv" fill="#ffc658" />
                </BarChart>
            </ChartCard>
            <ChartCard title={'MTTR'} sortType={'Monthly'}>
            </ChartCard>
            <ProductionGraphChart />
            
            <VoltageChart />
            <AmpereChart />
            <TopFrequencyChart />
        </DashboardWrapper>
    </div>
  )
}

export default Dashboard