import { combineReducers } from '@reduxjs/toolkit';
import jobAppliedReducer from './slice';

const rootReducer = combineReducers({
    jobApplied: jobAppliedReducer,
    // add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;