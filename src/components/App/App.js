import Input from './../Input/Input'
import Countries from './../Countries/Countries'
import Preview from './../Preview/Preview'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './../../store/reducers'
import { watchAll } from './../../store/sagas'

import styles from './app.module.scss'

const App = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware),
  )
  sagaMiddleware.run(watchAll)

  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Preview />
        <div className="container">
          <h2 className={styles.title}>Instant Search</h2>
          <Input />
          <Countries />
        </div>
      </div>
    </Provider>
  )
}

export default App
