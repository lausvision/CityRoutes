import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {activitiesReducer, citiesReducer, countriesReducer, typologiesReducer, routesReducer} from "./reducers/index";
import api from './api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers ({
  activities: activitiesReducer,
  cities: citiesReducer,
  countries: countriesReducer,
  typologies: typologiesReducer,
  routes: routesReducer
})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
);
