import { Reducer } from 'redux';
import { IState } from '../../../reducer';
import { imageUploadRequest, imageUploadSuccess, imageUploadError } from '../actions';

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
		default:
			return state;
	}
}

export const dashboardSelector = (state: IState) => state.dashboard;

export default dashboardReducer;
