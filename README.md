# mini-redux
This is a mini redux. It is a part of the React Nano degree from Udacity.

#What does mini-redux do?
It contains the core functinalites of the redux library. Similarly, it can serve as a library, which moves all app states into a central location and provides predictable state management.

# main concepts
## state tree
A state tree is a single object that stores all the data for an application.

## store
The store contains 1) a state tree and 3 ways to interact with the state tree.

3 ways to interact with state tree includes:
- Get the state
- Listen for changes
- Update the state

# functions

## createStore
### get a new store
`let store = createStore()`
When envoked, it returns a store with 3 functions to 1) get the state 2) listen for changes 3) update the state

### get the state
`store.getState()`

### listen for state changes
`store.subscribe(<CALLBACK_FUNC>)`
The subscribe method on a store can be called multiple times with different c s.
To unsubscribe a CALLBACK_FUNC, invoke the return value of a subscribe method.

Internally, all the <CALLBACK_FUNC>s passed in as params to the subscribe function call will be tracked in the store's internal listerners array.