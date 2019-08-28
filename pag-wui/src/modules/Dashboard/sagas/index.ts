import { fork } from 'redux-saga/effects';
import uploadSaga from './uploadSaga';
import pixelateSaga from './pixelateSaga';
import testUploadSaga from './testUploadSaga';

function* dashboardSaga() {
	yield fork(uploadSaga);
	yield fork(pixelateSaga);
	yield fork(testUploadSaga);
}

export default dashboardSaga;
