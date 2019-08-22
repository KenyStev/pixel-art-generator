import { Reducer } from 'redux';
import { IState } from '../../../reducer';

export interface IStateDashboard {
	fetching: boolean;
	data: any;
	error: Error | null;
}

const initialState: IStateDashboard = {
	fetching: false,
	data: null,
	error: null
}

const dashboardReducer: Reducer<IStateDashboard> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		default:
			return state;
	}
}

export const dashboardSelector = (state: IState) => state.dashboard;

export default dashboardReducer;
