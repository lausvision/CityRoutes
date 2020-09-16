import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
//TODO: import all reducers from reducers/index
import activitiesReducer from "./reducers/activities";
import citiesReducer from "./reducers/cities";
import countriesReducer from "./reducers/countries";
import typologiesReducer from "./reducers/typologies"; 
import routesReducer from "./reducers/routes";
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
