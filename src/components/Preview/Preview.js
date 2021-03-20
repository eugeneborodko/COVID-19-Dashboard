import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { totalCovidData } from './../../utils/totalCovidData'
import { loadCovidData } from './../../store/covid/actions'

import styles from './preview.module.scss'

const Preview = () => {
  const data = useSelector((state) => state.covid.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCovidData())
  }, [dispatch])

  if (!Object.keys(data).length) {
    return <div className="loading">Loading...</div>
  }

  return (
    <>
      {!!Object.keys(data).length && (
        <div className={styles.preview}>
          {totalCovidData.map((item) => {
            return (
              <div
                className={`${styles['item']} ${styles[`item${item.id}`]}`}
                key={item.id}
              >
                <h2 className={styles.number}>
                  {data.Global[item.param]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h2>
                <p className={styles.text}>{item.text}</p>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Preview
