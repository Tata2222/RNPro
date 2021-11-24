import {applyMiddleware, combineReducers} from 'redux';
import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {habbitReducer} from './habbits/habbitReducer';
import {memberReducer} from './members/memberReducer';
import {rootSaga} from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const RootReducer = combineReducers({
  habbits: habbitReducer,
  members: memberReducer,
});

export const store = createStore(RootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
