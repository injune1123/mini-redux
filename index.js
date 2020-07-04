function createStore () {
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

    return {
        getState,
        subscribe
    }
}

const store = createStore()   

store.subscribe(()=>{
    console.log('The new state is: ', store.getState())
})