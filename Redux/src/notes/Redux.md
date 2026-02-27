Redux (Managing App-Wide State) --> 3rd Party library

Topics:
--------

-> What is Redux? and Why would you use it?

-> Redux Basics & Using Redux with React

-> Working with Redux Toolkit
======================================

*| what is Redux?

-- A state management system for cross-component or app-wide state

State-- Data which when changed, should affect the ui

state types --> Local(state belongs to a single component) , Cross-component (state affecting multiple components), App-wide (state affecting entire app)

--React Context and Redux helps manage cross-component & app-wide states.
========================================

Redux v/s React Context

-- React Context has some potential disadvantages.

->  Complex setup & Management
-    Potential Problem : Deeply Nested Providers
-    complex providers

->   Performance
-    Potential Problem : High-Frequency Changes  (ReactContext is not optimized for high frequency changes)
========================================

* How Does React works?
            -------> Reducer Function
    Forward to                 | 
                            mutates data 
            |                v
                        Central Data 
        Action             Store
            |Dispatch       |  
            |           Subscription  
            |               v
            -------------Components

component's dont directly manipulate the data stored in central data store.
insted we have reducer function (responsible for muting data)

=====================================
to working with react install:--- npm install redux react-redux

-------------------------------------
useSelector hook- convinenet to use it allows to automatically select part of state managed by store.

useDispatch and useSelector gets used with functional component.

-----------
for class based component import {connect} from 'react-redux'
------

Redux toolkit - extra package which makes working with Redux more convinient and easier.
install via: npm install @reduxjs/toolkit
-- createSlice
--combineRedux(we havent use)
--configureStore
---redux toolkit uses package imgur :it takes our state,keeps all the state we are not editing and overrides current state obj with new.


----------------
Redux deep dive

handling Async Tasks with Redux
where to put your code
Redux dev tools
------------------------------
