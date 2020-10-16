## StarWars.ly React App Features
Allows you to explore and uncover information the Star Wars universe. 
- Start with the first film release "A New Hope"
- As you click through items to get more information, people, planets, and films will appear named instead of "Unknown"
- Click the reset button on the homepage to start over

## App Architecture / Component Hierarchy
```
Redux Store
|
 -- App
    |
    |-- NavBar
    |-- HomePage
    |-- FilmList
    |   |
    |    -- ItemList (Films)
    |       |
    |        -- Film 
    |          |
    |           -- SubLists (Planets and People)
    |-- PlanetList
    |   |
    |    -- ItemList (Planets)
    |        |
    |         -- Planet
    |            |
    |             -- SubLists (People and Films)
    |-- PersonList
        |
         -- ItemList (People)
            |
             -- People
                |
                 -- SubLists (Films)

```
## Libraries in Use
- Axios
- React
- Redux
- React Router
- Redux Persist
- Redux Thunk