import { combineReducers } from 'redux';
import storage from 'redux-persist/es/storage';
import { persistReducer, PersistPartial } from 'redux-persist';
import dashboardReducer, { IStateDashboard } from './modules/Dashboard/reducers';

const persistConfig = {
	key: 'dashboard',
	storage: storage
};

type TStatePersisted = IStateDashboard & PersistPartial;

export interface IState {
	dashboard: TStatePersisted;
};

const rootReducer = combineReducers<IState>({
	dashboard: persistReducer(persistConfig, dashboardReducer)
});

export default rootReducer;
