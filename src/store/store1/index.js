import {createContainer} from 'redux-box';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import sagas from './sagas';

export const module = {
    name: 'Store1',
    actions,
    state,
    mutations,
    sagas
}

export const container = createContainer(module);
export default container;
