import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import recipes from './recipes';

const reducer = combineReducers({
    form: formReducer,
    recipes
})

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
        changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" />
    </DockMonitor>
)

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(
    reducer,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
)

export default store;
