import React from 'react';
import { makeLazyLoader, moduleLoader } from '@deriv/shared';
import { Loading } from '@deriv/components';
import CashierApp from './app';

const IS_RELEASE =
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'test';

const LazyApp = makeLazyLoader(
    () => moduleLoader(() => import(/* webpackChunkName: "cashier-app", webpackPreload: true */ './app')),
    () => <Loading />
)();

const App = IS_RELEASE ? LazyApp : CashierApp;

export default App;
