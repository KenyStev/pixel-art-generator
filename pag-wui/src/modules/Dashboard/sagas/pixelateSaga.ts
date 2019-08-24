import { take, call, put } from 'redux-saga/effects';
import { ServerError } from '../../../utils/errors';
import { getPixelatedImage } from '../../../utils/api';
import { pixelateImageRequest, pixelateImageSuccess, pixelateImageError } from '../actions';

function* pixelateSaga() {
	while(true) {
		const action = yield take(pixelateImageRequest.getType());
		const body = {
			imageName: action.payload
		};
		const response = yield call(getPixelatedImage, body);

		if (!response.ok) {
			yield put(pixelateImageError(new ServerError()));
			continue;
		}

		yield put(pixelateImageSuccess(response.body));
	}
}

export default pixelateSaga;
