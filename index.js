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
// This is the pure function that will return new states
// It takes in two args: the current sate and an action
// It is a reducer
function todos (state = [], action) {
    switch (action.type) {

        case 'ADD_TODO':
            // Array.concat returns a new array 
            return state.concat([action.todo])

        default:
            return state
    }
}

//instantiate a new store
const store = createStore(todos)   

//add a listener to listen for changes
store.subscribe(()=>{
    console.log('The new state is: ', store.getState())
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
})

