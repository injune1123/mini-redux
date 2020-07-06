# mini-redux
This is a mini redux. It is a part of the React Nano degree from Udacity.

#What does mini-redux do?
It contains the core functinalites of the redux library. Similarly, it can serve as a library, which moves all app states into a central location and provides predictable state management.

mini-redux, just like redux is a predictable state container for JavaScript apps.

# Project Setup
You just need to open the html files in a browser. That's it.

# main concepts
## state tree
A state tree is a single object that stores all the data for an application.

## store
The store contains 1) a state tree and 3 ways to interact with the state tree.

3 ways to interact with state tree includes:
- Get the state - getState
- Listen for changes - subscribe
- Update the state - dispatch

## action 
An action is a plain JS object with a type property to indicate what types of action occured. It can also contain other properties with extra data. All actions must have a type property.

Only actions can change the sate of a store.
Below is an example action: 
```
{
    type: "TOGGLE_TODO",
    id: 0
}
```
In this Action, we're including the id field. Now we know exactly which todo list item will be toggled in the store!

###action creators 
Action Creators are functions that create/return action objects. For example:
```
const toggleItem = id => ({
  type: TOGGLE_ITEM,
  id
});
```
## reducer
A reducer is a pure function that returns a new state based on an action and the current state

## dispatch 
Dispatch dispatches an action. It is a method on the state instance. 
The dispatch method is responsible for updating the state in the store. It receives an action and then sets the state to be the return value of the reducer function call invocation.
It also invokes all the listeners.

# code walk through
There are 3 files in this repo:
- index.js : core code of mini-redux
- example.html : an example of using mini-redux with plain JS
- redux-example.html: Almost identical to `example.html`, but it swaps out mini-redux with Redux

## index.js
The code can be divided into to categories: library code, and app code. 

The library code is the core of mini-redux
The app code provides an example of how to utilize mini-redux in real world applications

## createStore
### get a new store
`let store = createStore(reducer)`
When envoked, it returns a store with 3 functions to 1) get the state 2) listen for changes 3) update the state

It returns a user defined reducer, which takes in the current state, and an action and returns a new state. The reducer is used in the dispatch method a newly created store.  

### get the state
`store.getState()`

### listen for state changes
`store.subscribe(<CALLBACK_FUNC>)`
mini-redux, just like redux, provides the ability to attach listerners to states. Whenever a state changes, the listeners will "hear" the change, and invoke all the callback functions (<CALLBACK_FUNC>) that subscribes to the changes.
The subscribe method on a store can be called multiple times with different callback functions.
To unsubscribe a CALLBACK_FUNC, invoke the return value of a subscribe method.

Internally, all the <CALLBACK_FUNC>s passed in as params to the subscribe function call will be tracked in the store's internal listerners array.

### update the state
How states are updated is vital to predictability. Mini-redux, like redux, borrows the predictability of playbook from NFL teams. It has a collection of actions that can occur in the app to change the app state.

#### Only an action can change the state of the store.

#### Reducers are used to generate new states
A reducer, which must be a pure function, takes in two arguments: 1) the current state, 2) the action that occured will be responsible for updating the state. It returns the new updated state. 

##### Pure functions are functions that 1) returns the same result if the same arguements are passed in, 2) depends solely on the arguments passed in them, and 3) do not have any side effects, like change of global variables, console.logs, etc.

## dispatch 
Dispatch is responsible for updating the state in the store. It receives an action and then sets the state to be the return value of the reducer function call invocation. 

# Best practices in app code
- Use const varibles for action types
- Abstract actions into action creators. This follows the DRY principle.

