import { createStore, applyMiddleware, combineReducers } from 'redux';
import { CreateJumpstateMiddleware } from 'jumpstate';

import categories from './../reducers/categories'

const reducers = {
  categories,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(
    CreateJumpstateMiddleware()
  )
);

export default store;