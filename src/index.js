import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import gameStateReducer from './store/reducers/gameState';
import inputReducer from './store/reducers/input';
import layersReducer from './store/reducers/layers';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  gameState: gameStateReducer,
  input: inputReducer,
  layers: layersReducer
});

const store = createStore(rootReducer);

const game = (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(game, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
