import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './mainPage/reducer';

const rootReducers = combineReducers({
  main: mainReducer,
});

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
