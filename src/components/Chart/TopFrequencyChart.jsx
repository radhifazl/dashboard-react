import React from 'react'
import ChartCard from './ChartCard'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [10, 20, 30, 40, 50, 60, 70].reverse(),
      backgroundColor: '#DC3545',
    },
  ],
};


const TopFrequencyChart = () => {
  return (
    <ChartCard title={'5 Top Frequency Machine Alarm'} sortType={'Monthly'}>
        <Bar options={options} data={data} />
    </ChartCard>
  )
}

export default TopFrequencyChart