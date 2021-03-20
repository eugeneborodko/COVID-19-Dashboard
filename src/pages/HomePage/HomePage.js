import Preview from './../../components/Preview/Preview'
import Input from './../../components/Input/Input'
import Countries from './../../components/Countries/Countries'

import styles from './home-page.module.scss'

const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 className={`${styles.title} ${styles.mainTitle}`}>
          Coronavirus Dashboard
        </h1>
      </div>
      <Preview />
      <div className="container">
        <h2 className={`${styles.title} ${styles.secondaryTitle}`}>
          Instant Search
        </h2>
        <Input />
        <Countries />
      </div>
    </>
  )
}

export default HomePage
