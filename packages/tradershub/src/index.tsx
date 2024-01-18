import React from 'react';
import { makeLazyLoader, moduleLoader } from './utils/loader';
import TradersHubApp from './App';

const IS_RELEASE =
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'test';

const LazyApp = makeLazyLoader(
    () => moduleLoader(() => import(/* webpackChunkName: "tradershub", webpackPreload: true */ './App')),
    () => <div />
)();

const App = IS_RELEASE ? LazyApp : TradersHubApp;

export default App;
