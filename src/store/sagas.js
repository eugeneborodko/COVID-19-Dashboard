import { takeEvery, put, call, all } from 'redux-saga/effects'
import {
  LOAD_COUNTRY_DATA,
  putCountryData,
  putCopiedCountryData,
} from './country/actions'
import { LOAD_COVID_DATA, putCovidData } from './covid/actions'

function getCountryData() {
  return fetch(
    'https://restcountries.eu/rest/v2/all?fields=name;population;flag',
  ).then((res) => res.json())
}

function getCovidData() {
  return fetch('https://api.covid19api.com/summary').then((res) => res.json())
}

function* workerLoadCountryData() {
  const data = yield call(getCountryData)
  yield put(putCountryData(data))
  yield put(putCopiedCountryData(data))
}

function* workerLoadCovidData() {
  const data = yield call(getCovidData)
  yield put(putCovidData(data))
}

export function* watchAll() {
  yield all([
    takeEvery(LOAD_COUNTRY_DATA, workerLoadCountryData),
    takeEvery(LOAD_COVID_DATA, workerLoadCovidData),
  ])
}
