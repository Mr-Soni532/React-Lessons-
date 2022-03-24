import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {

    switch (action.type) {
        case ('INC'):
            return { counter: state.counter + 1 };
        case ('DEC'):
            return { counter: state.counter - 1 };
        case ('ADD'):
            return { counter: state.counter + action.payload };
        default:
            return state;
    }
}

// Create a store and pass reducer function
const store = createStore(reducerFn)
export default store;