import { combineReducers } from 'redux';
import repositories from './repositoriesReducer';

const rootReducer = combineReducers({
	repositories
});

export default rootReducer;
