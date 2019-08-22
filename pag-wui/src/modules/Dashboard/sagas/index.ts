import { take } from 'redux-saga/effects';
import { imageUploadRequest } from '../actions';

function* dashboardSaga() {
	while(true) {
		yield take(imageUploadRequest.getType());
	}
}

export default dashboardSaga;
