import { Bar } from 'react-chartjs-2'

import styles from './bar-chart.module.scss'

const BarChart = () => {
  return (
    <div className={styles.barChart}>
      <Bar
        data={{
          labels: [
            'Americas',
            'Europe',
            'South-East Asia',
            'Eastern Mediterranean',
            'Africa',
            'Western Pacific',
          ],
          datasets: [
            {
              label: 'Confirmed Cases (2020)',
              data: [55941329, 45112584, 14911540, 7564704, 3097533, 1912547],
              backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
              ],
            },
          ],
        }}
        width={600}
        height={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  )
}

export default BarChart
