    import {
        createStore
    } from 'redux';
    const store = createStore();



// // create store tak wyglada 
// function createStore(reducer) {
//     var state;
//     var listeners = []

//     function getState() {
//         return state
//     }
    
//     function subscribe(listener) {
//         listeners.push(listener)
//         return unsubscribe() {
//             var index = listeners.indexOf(listener)
//             listeners.splice(index, 1)
//         }
//     }
    
//     function dispatch(action) {
//         state = reducer(state, action)
//         listeners.forEach(listener => listener())
//     }

//     dispatch({})

//     return { dispatch, subscribe, getState }
// }