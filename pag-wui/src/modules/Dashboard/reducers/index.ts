import { Reducer } from 'redux';
import { IState } from '../../../reducer';
import {
	imageUploadRequest, imageUploadSuccess, imageUploadError,
	pixelateImageRequest, pixelateImageSuccess, pixelateImageError
} from '../actions';

export interface IStateDashboard {
	fetching: boolean;
	uploadedImageData: any;
	pixelatedImageData: any;
	error: Error | null;
}

const initialState: IStateDashboard = {
	fetching: false,
	uploadedImageData: null,
	pixelatedImageData: null,
	error: null
}

const dashboardReducer: Reducer<IStateDashboard> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case imageUploadRequest.getType():
			return {
				...state,
				fetching: true
			};
		case imageUploadSuccess.getType():
			return {
				...initialState,
				uploadedImageData: action.payload
			}
		case imageUploadError.getType():
			return {
				...initialState,
				error: action.payload
			}
		case pixelateImageRequest.getType():
			return {
				...state,
				fetching: true
			}
		case pixelateImageSuccess.getType():
			return {
				...initialState,
				uploadedImageData: state.uploadedImageData,
				pixelatedImageData: {
					...action.payload,
					bitmap: {
						...action.payload.bitmap,
						data: action.payload.bitmap.data.data
					}
				}
			}
		case pixelateImageError.getType():
			return {
				...initialState,
				error: action.payload
			}
		default:
			return state;
	}
}

export const dashboardSelector = (state: IState) => state.dashboard;

export default dashboardReducer;
