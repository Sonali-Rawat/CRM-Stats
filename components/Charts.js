import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const Charts = ({ timeWindow }) => {
  // Dummy data based on timeWindow (update as necessary based on real data logic)
  const getDataForTimeWindow = (timeWindow) => {
    switch (timeWindow) {
      case '1d':
        return {
          pieData: {
            labels: ['Direct', 'Referral', 'Social'],
            datasets: [{ data: [100, 20, 50], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }],
          },
          lineData: {
            labels: ['Today'],
            datasets: [{ label: 'Sales', data: [80], fill: false, backgroundColor: '#36A2EB', borderColor: '#36A2EB' }],
          },
          barData: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{ label: 'Votes', data: [5, 10, 2], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }],
          },
        };
      case '1w':
        return {
          pieData: {
            labels: ['Direct', 'Referral', 'Social'],
            datasets: [{ data: [200, 40, 80], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }],
          },
          lineData: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{ label: 'Sales', data: [60, 70, 80, 90], fill: false, backgroundColor: '#36A2EB', borderColor: '#36A2EB' }],
          },
          barData: {
            labels: ['Red', 'Blue', 'Yellow', 'Green'],
            datasets: [{ label: 'Votes', data: [15, 20, 10, 5], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'] }],
          },
        };
      default:
        return {
          pieData: {
            labels: ['Direct', 'Referral', 'Social'],
            datasets: [{ data: [300, 50, 100], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }],
          },
          lineData: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{ label: 'Sales', data: [65, 59, 80, 81, 56], fill: false, backgroundColor: '#36A2EB', borderColor: '#36A2EB' }],
          },
          barData: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{ label: 'Votes', data: [12, 19, 3, 5, 2, 3], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'] }],
          },
        };
    }
  };

  const { pieData, lineData, barData } = getDataForTimeWindow(timeWindow);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      <div className="col-span-1 lg:col-span-1">
        <h3 className="text-lg font-semibold mb-2">Sales Distribution</h3>
        <Pie data={pieData} />
      </div>
      <div className="col-span-1 lg:col-span-1">
        <h3 className="text-lg font-semibold mb-2">Sales Over Time</h3>
        <Line data={lineData} />
      </div>
      <div className="col-span-1 lg:col-span-1 lg:row-start-1 lg:row-end-3">
        <h3 className="text-lg font-semibold mb-2">Customer Votes</h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Charts;
