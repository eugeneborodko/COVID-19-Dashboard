import { Bar } from 'react-chartjs-2'

import styles from './bar-chart.module.scss'

const BarChart = () => {
  return (
    <div className={styles.barChart}>
      <Bar
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        }}
        width={600}
        height={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  )
}

export default BarChart
