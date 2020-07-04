function createStore () {
    // the store shuld have four parts
    // 1. Hold the state
    // 2. Get the State
    // 3. Listen to changes on the state
    // 4. Update the state
    
    let state

    const getState = () => state

    return {
        getState
    }
}