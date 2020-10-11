- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  * The regex is `/\d+/` which matches any digit (0-9). This allows for returning an array of the ids for a particular data set where the results are actually API urls:
  ```
  characters = characters.map(url => url.match(/\d+/)[0]);
  ```
  would return an array of character ids: [3, 10, 16]
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  * It is stored in localStorage. This is done with the redux-persist library.
  
- What does `combineReducers` do? Why are we using it? 
  * It combines all the reducers for redux. It allows you to abstract out the logic for reducers for different pieces of state to make it more manageable than having one giant reducer file for all state.

- How does the "Reset to Fresh Exploration" feature work?
  * It dispatches a reset action to all reducers which returns the intial state, effectively clearing out all state.

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
  * So that you don't have to repeat code the code in ItemList when all that is changing is what data is being shown.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  * Because of the way the app functions, a user is forced to start exploration with the first film. It is therefore unnecessary to check all films to decide whether to show the reset button or the start with a new hope button. Checking all films would generate async requests that would slow load time.
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  * The redux store persistance is useful. I had not seen that before.
  * Having app-wide actions (like reset-all) is good for reducing code duplication.
  * Feel like that's about it. Mostly reinforces the concepts we've already learned and how I've been approaching react app design.
  
- Which Star Wars character would make the best React developer, and why?
  * Darth Vader because he's mastered how to manipulate the dark side of the force aka front-end development 😝
