import { createStore, applyMiddleware, combineReducers, AnyAction } from 'redux';
import { HYDRATE, createWrapper, MakeStore } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { MODE } from '~libs/global-var';
import userReducer, { initialState as userInitialState } from '~redux/user/reducer';

const middlewares = [thunk];

export type Middlewares = typeof middlewares;

const bindMiddleware = (middleware: Middlewares) => {
    if (MODE !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
    user: userReducer
});

const initialState = {
    user: userInitialState
};

export type StoreState = typeof initialState;

const reducer = (state: StoreState | undefined = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case 'CLEAR_STATE':
            state = undefined;
        default:
            return combinedReducer(state, action);
    }
};

const makeStore: MakeStore<StoreState> = () => createStore(reducer, bindMiddleware(middlewares));

const wrapper = createWrapper<StoreState>(makeStore, { debug: MODE === 'development' });

export default wrapper;
