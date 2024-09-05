import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const Charts = ({ timeWindow }) => {
  const pieData = {
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
      },
    ],
  };

  const barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Sales Distribution</h3>
        <Pie data={pieData} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Sales Over Time</h3>
        <Line data={lineData} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Customer Votes</h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Charts;
