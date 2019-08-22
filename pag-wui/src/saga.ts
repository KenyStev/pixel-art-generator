import { fork } from 'redux-saga/effects';
import dashboardSaga from './modules/Dashboard/sagas';

function* mainSaga() {
	yield fork(dashboardSaga);
}

export default mainSaga;
