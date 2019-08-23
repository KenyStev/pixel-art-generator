import { take } from 'redux-saga/effects';
import { imageUploadRequest } from '../actions';

function* dashboardSaga() {
	while(true) {
		const action = yield take(imageUploadRequest.getType());

		console.log(action);
	}
}

export default dashboardSaga;
