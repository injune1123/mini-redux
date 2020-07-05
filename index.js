//Library code
function createStore (reducer) {
    // the store shuld have four parts
    // 1. Hold the state
    // 2. Get the State
    // 3. Listen to changes on the state
    // 4. Update the state

    let state

    let listeners = []

    const getState = () => state

    const subscribe = (callbackFunc) => {
        listeners.push(callbackFunc)
        return () => {
            listeners = listeners.filter((cb) => cb !== callbackFunc )
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    return {
        getState,
        subscribe,
        dispatch
    }
}

// App code

// App action types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const TOGGLE_GOAL = 'TOGGLE_GOAL';

// This is the pure function that will return new states
// It takes in two args: the current sate and an action
// It is a reducer
function todos (state = [], action) {
    switch (action.type) {

        case ADD_TODO:
            // Array.concat returns a new array 
            return state.concat([action.todo])
        case REMOVE_TODO:
            // Array.filter returns a new array 
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
            // Array.map returns a new array 
            return state.map(
                (todo) => todo.id !== action.id ? todo: Object.assign({}, todo, {complete: !todo.complete})
            )
        default:
            return state
    }
}

// It is another reducer
function goals (state = [], action) {
    switch (action.type) {

        case ADD_GOAL:
            // Array.concat returns a new array 
            return state.concat([action.goal])
        case REMOVE_GOAL:
            // Array.filter returns a new array 
            return state.filter((goal) => goal.id !== action.id)
        case TOGGLE_GOAL:
            // Array.map returns a new array 
            return state.map(
                (goal) => goal.id !== action.id ? todo: Object.assign({}, todo, {complete: !goal.complete})
            )
        default:
            return state
    }
}

// the root reducer
function app (state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    }
}

//instantiate a new store
const store = createStore(app)   

//add a listener to listen for changes
store.subscribe(()=>{
    console.log('The new state is: ', store.getState())
})

store.dispatch({
    type: ADD_TODO,
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
})

store.dispatch({
    type: ADD_TODO,
    todo: {
      id: 0,
      name: 'Walk the dog',
      complete: false,
    }
  })
  
  store.dispatch({
    type: ADD_TODO,
    todo: {
      id: 1,
      name: 'Wash the car',
      complete: false,
    }
  })
  
  store.dispatch({
    type: ADD_TODO,
    todo: {
      id: 2,
      name: 'Go to the gym',
      complete: true,
    }
  })
  
  store.dispatch({
    type: REMOVE_TODO,
    id: 1
  })
  
  store.dispatch({
    type: TOGGLE_TODO,
    id: 0
  })
  
  store.dispatch({
    type: ADD_GOAL,
    goal: {
      id: 0,
      name: 'Learn Redux'
    }
  })
  
  store.dispatch({
    type: ADD_GOAL,
    goal: {
      id: 1,
      name: 'Lose 20 pounds'
    }
  })
  
  store.dispatch({
    type: REMOVE_GOAL,
    id: 0
  })
  
