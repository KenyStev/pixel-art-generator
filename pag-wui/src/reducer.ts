import { combineReducers } from 'redux';
import dashboardReducer, { IStateDashboard } from './modules/Dashboard/reducers';

export interface IState {
	dashboard: IStateDashboard;
};

const rootReducer = combineReducers<IState>({
	dashboard: dashboardReducer
});

export default rootReducer;
