import { fork } from 'redux-saga/effects';
import uploadSaga from './uploadSaga';
import pixelateSaga from './pixelateSaga';

function* dashboardSaga() {
	yield fork(uploadSaga);
	yield fork(pixelateSaga);
}

export default dashboardSaga;
