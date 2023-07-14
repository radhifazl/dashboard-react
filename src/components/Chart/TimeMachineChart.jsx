import React from 'react'
import ChartCard from '../Chart/ChartCard'
import { 
    PieChart, Pie, Tooltip,
} from 'recharts';



const data01 = [
    { name: 'Stop Line', value: 400, fill: '#DC3545' },
    { name: 'Idle', value: 300, fill: '#28A745' },
    { name: 'Running', value: 300, fill: '#F1BE42' },
];

const TimeMachineChart = () => {
  return (
    <ChartCard title={'Time Machine Detail'} sortType={'Date'} data={data01}>
        <div className="flex w-full justify-between items-center">
            <PieChart width={200} height={200}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                />
                <Tooltip />
            </PieChart>
            <ul>
                {
                    data01.map((item, index) => (
                        <li key={index} className="flex items-center gap-5 mb-3">
                            <div className={`w-[20px] h-[20px] rounded-full bg-[${item.fill}]`}></div>
                            <p>{item.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </ChartCard>
  )
}

export default TimeMachineChart