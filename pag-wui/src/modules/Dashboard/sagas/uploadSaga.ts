import { take, call, put } from 'redux-saga/effects';
import { ServerError } from '../../../utils/errors';
import { imageUploadRequest, imageUploadSuccess, imageUploadError } from '../actions';
import { postImage } from '../../../utils/api';

export function* fileObjectUpload(fileObject: File) {
	const body = new FormData();
	body.append('image', fileObject);

	const response = yield call(postImage, body);

	if(!response.ok) {
		yield put(imageUploadError(new ServerError()));
		return response;
	}

	return response;
};

function* uploadSaga() {
	while(true) {
		const action = yield take(imageUploadRequest.getType());
		const response = yield call(fileObjectUpload, action.payload);

		yield put(imageUploadSuccess(response.body));
	}
}

export default uploadSaga;
