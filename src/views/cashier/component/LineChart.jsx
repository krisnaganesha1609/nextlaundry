import { useState} from 'react';
import  { PickupData } from '../../../model/data/PickupDataModel';
import { Line } from 'react-chartjs-2';
import styles from '../../../style';

const LineChart = ({analytics}) => {

    const [chartData, setChartData] = useState({
        labels: PickupData.map((data) => data.year),
        datasets: [
            {
                label: "Pickups",
                data: PickupData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "white",
                borderWidth: 2
            }
        ]
    });
  return (
    <div className='container mt-2'>
        <h2 className={`font-righteous`}>{analytics} Analytics</h2>
          <div className={`bg-purple container w-1/4 h-[10px] rounded-[50px] my-2`}>
          </div>
        <Line data={chartData} options={{
            plugins: {
                title: {
                    display: true,
                    text: "Pickup Data between 2019-2023"
                },
                legend: {
                    display: false
                }
            }
        }}/>
    </div>
  )
}

export default LineChart