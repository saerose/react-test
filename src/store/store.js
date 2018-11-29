
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import reducer from './reducers/cards.reducer';
import api from './middleware/api';
import config from './../config';
// import { persistStore, /*persistReducer*/ } from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const reducers = combineReducers({ apiReducer: reducer });
    const store = createStore( reducers, composeEnhancers(applyMiddleware(api(config.baseUrl))));
    return { store };
};

export default configureStore;
