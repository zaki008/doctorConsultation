import {createStore} from 'redux';

//konsep mirip use state

const initialState = {
    loading: false,
};

const reducer = (state = initialState, action) =>{
    if (action.type === 'SET_LOADING') {
      return {
        ...state,
        loading: action.value,
      };
    }
    return state;
};

const store = createStore(reducer);

export default store;
