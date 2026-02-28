dont mutate redux state specially outside reducer


* Fat Reducers vs. Fat Components vs. Fat Actions
where to put our logic?
--Synchronous, side-effect free code   (i.e. data transformations)

----prefer reducers, Avoid action creators or components

--Async code or code with side-effects
----prefer action creators or components never use reducers.

-------------------------------
what is thunk? - Function that delays an action until later

-->an action creator function that does not return the action itself but insted another function which evantually returns the action.