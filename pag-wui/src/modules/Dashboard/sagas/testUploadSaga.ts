import { take, call, put } from 'redux-saga/effects';
import { ServerError } from '../../../utils/errors';
import { imageTestUploadRequest, imageAlreadyUploadedRequest, imageUploadRequest } from '../actions';
import { getTestImage } from '../../../utils/api';

function* testUploadSaga() {
	while(true) {
		const action = yield take(imageTestUploadRequest.getType());
		const bodyParams = {
			testImage: action.payload.name
		}
		const response = yield call(getTestImage, bodyParams);

		console.log(response);
		
		if (response.ok) {
			yield put(imageAlreadyUploadedRequest(response.body));
			continue;
		}

		yield put(imageUploadRequest(action.payload));
	}
}

export default testUploadSaga;
