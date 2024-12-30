const redux = require('redux');

const counterReducer = (state = {counter : 0},action) =>{
    return {
        counter : state.counter - 1
    }
}

const store = redux.createStore(counterReducer);


const counterSubscribe = () =>{
    const lateststate = store.getState();
    console.log(lateststate);
}

store.subscribe(counterSubscribe);
for(let i=0;i<5;i++){
    store.dispatch( {type : 'decrement'});
}