// //////////////////////////////////////////////
/*
// NOTE LEKTION 1
*/
// /////////////////////////////////////////////
// import { createStore } from "redux";
//
// const INC = "INC"
//
// const reducer = (initialState = 0, action) => {
//   if (action.type === INC) {
//     return initialState + 1;
//   } else if (action.type === "DEC") {
//     return initialState - 1;
//   }
//   return initialState;
// }
//
// const store = createStore(reducer, 1)
// //
// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });
// //
// store.dispatch({type: "INC"});
// store.dispatch({type: "INC"})
// // store.dispatch({type: "INC"})
// store.dispatch({type: "DEC"})
// // store.dispatch({type: "DEC"})
// // store.dispatch({type: "DEC"})

// //////////////////////////////////////////////
/*
// NOTE LEKTION 2

*/
// /////////////////////////////////////////////

import { createStore } from "redux";

const todos = [{
  id: 1,
  item: "Klippa gräset",
  done: false
}, {
  id: 2,
  item: "Måla staketet",
  done: false
}];

const reducer = (state = todos, action) => {
  switch(action.type) {

    case "ADD_TODO":
    return state.concat({
      id: Date.now(),
      item: action.value,
      done: false
    });

    case "MARK_TODO_AS_DONE":
    return state.map((todo) => {
      if(todo.id === action.value) {
        return Object.assign({}, todo, {
          done: true
        })
      }
      return todo;
    })

    case "DELETE_TODO":
    return state.filter(todo => todo.id !== action.value);

    // break;
    default:
      return state
  }
  return state;
}

const store = createStore(reducer)

console.log(store.getState(), ' Initial store');


store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "ADD_TODO", value: "Köpa mjölk"});
store.dispatch({type: "MARK_TODO_AS_DONE", value: 1});
store.dispatch({type: "DELETE_TODO", value: 2});



// NOTE LEKTION 3

// import { combineReducers, createStore } from "redux";
//
// I would live in a separate file
// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case "SET_NAME": {
//       return {...state, name: action.payload};
//       break;
//     }
//     case "SET_AGE": {
//       return {...state, age: action.payload};
//       break;
//     }
//   }
//   return state;
// }
//
// // I would live in a separate file
// const tweetsReducer = (state=[], action) => {
//   switch(action.type) {
//     case "ADD_TWEET": {
//       return state.concat({
//         id: Date.now(), //fake an ID by using a timestamp
//         text: action.payload,
//       });
//       break;
//     }
//   }
//   return state;
// }
// //
// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer
// })
// //
// const store = createStore(reducers)
//
// store.subscribe(() => {
//   console.log("store changed", store.getState());
// })

// store.dispatch({type: "SET_NAME", payload: "Will"})
// store.dispatch({type: "SET_AGE", payload: 35})
// store.dispatch({type: "SET_AGE", payload: 34})
// store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"})
// store.dispatch({type: "ADD_TWEET", payload: "I am so like seriously like totally like right now"})
