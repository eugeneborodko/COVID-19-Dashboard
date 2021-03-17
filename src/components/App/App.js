import HomePage from './../../pages/HomePage/HomePage'
import Statistics from './../../pages/Statistics/Statistics'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
    <Router>
      <Provider store={store}>
        <div className={styles.app}>
          <Switch>
            <Route path="/Belarus">
              <Statistics />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App
