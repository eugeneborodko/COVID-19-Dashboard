import { takeEvery, put, call, all } from 'redux-saga/effects'
import { LOAD_COUNTRY_DATA, putCountryData } from './country/actions'

function getCountryDate() {
  return fetch(
    'https://restcountries.eu/rest/v2/all?fields=name;population;flag',
  ).then((res) => res.json())
}

function* workerLoadCountryData() {
  const data = yield call(getCountryDate)
  yield put(putCountryData(data))
}

export function* watchAll() {
  yield all([takeEvery(LOAD_COUNTRY_DATA, workerLoadCountryData)])
}
