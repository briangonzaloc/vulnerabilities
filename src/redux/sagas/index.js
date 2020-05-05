import { all } from 'redux-saga/effects';
import fetchRepositories from './FetchRepositories'

export default function* rootSaga() {
	yield all([
		fetchRepositories()
	]);
}
