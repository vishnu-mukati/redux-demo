const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 2
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 2
        }
    }
    return state;
}

const store = redux.createStore(counterReducer);


const counterSubscribe = () => {
    const lateststate = store.getState();
    console.log(lateststate);
}

store.subscribe(counterSubscribe);
    store.dispatch({ type: 'increment' });
    store.dispatch({ type: 'decrement' });
