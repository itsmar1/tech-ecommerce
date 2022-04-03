import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';


const LineChart = () => {

    const data = {
        labels: ['Apple', 'Dell', 'HP', 'Samsung'],
        datasets: [{
            label: '# of products',
            data: [5, 5, 7, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};


export default LineChart;