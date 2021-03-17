import Preview from './../../components/Preview/Preview'
import Input from './../../components/Input/Input'
import Countries from './../../components/Countries/Countries'

import styles from './home-page.module.scss'

const HomePage = () => {
  return (
    <>
      <Preview />
      <div className="container">
        <h2 className={styles.title}>Instant Search</h2>
        <Input />
        <Countries />
      </div>
    </>
  )
}

export default HomePage
