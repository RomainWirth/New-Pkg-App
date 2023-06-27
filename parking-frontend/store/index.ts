import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import parkingSpotReducer from './parkingSpot/reducers';

const rootReducer = combineReducers({
  parkingSpot: parkingSpotReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
