### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
  * Redux is a library for state management. You use it to have a central place to manage all shared application state and avoid prop dilling to pass data down to child components, and as an easier way to pass data back up to parent components.

- What are three features of the Redux developer tool in Chrome?
  * View current state
  * View the diff between previous and current state
  * View actions that are modifying state

- What is a store?
  * The centralized place where state is stored

- What is a reducer?
  * A function that accepts two arguments: state and action, which it uses to produce a new state, and then returns that new state. 

- What is an action?
  * A dispatched object that is intercepted and processed by a reducer. Actions contain a type key, which tells the reducer how to change state, along with any data needed to provide new state.

- What is an action creator?
  * A function that creates an action.

- How does data flow in a React/Redux application?
  * Dispatch (w/current state and action) --> Reducer --> Store (w/provides new state)

- What is the purpose of the `<Provider>` component?
  * The Provider wraps the App component and provides the store to the entire application.

- What is the purpose of the `useSelector` hook? What does it return?
  * Allows you to select data from the store. It returns the current value of said data.

- Describe the `useDispatch` hook. What do you use it for?
  * Allows you to dispatch actions to the store, which are intercepted by the reducers and update the store's state.

- What is redux-thunk and why would you use it?
  * A middleware function that wraps an expression to delay its evaluation. This allows you to dispatch multiple times to the store as well as have asynchronous dispatches.

- What are propTypes?
  * Allows you to document and verify a component's props.

- Describe the `useCallback` hook.  What is it used for?
  * useCallback accepts a function and an array of dependencies. It returns a function that won't be re-declared on subsequent renders if the dependencies don't change. Allows you to use these functions in the useEffect hook without infinite re-rendering.

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
  * useReducer is not one singular state container like Redux is.
  * useReducer does not allow you to combine all reducers like Redux does.
  * useReducer would likely be a good choice for small/medium applications that don't have too much state management vs Redux which is better suited for larger and more complex apps with lots of state.