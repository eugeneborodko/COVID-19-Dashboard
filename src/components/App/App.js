import Input from './../Input/Input'
import Countries from './../Countries/Countries'

import styles from './app.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <div className="container">
        <h2 className={styles.title}>Instant Search</h2>
        <Input />
        <Countries />
      </div>
    </div>
  )
}

export default App