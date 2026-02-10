import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image from './assets/image.png'

import componentsImg from './assets/components.png'
import jsx from './assets/jsx-ui.png'
import statemgmt from './assets/state-mgmt.png'
import config from './assets/config.png'
import { CORE_CONCEPTS } from './data'
import CoreConcept from './components/CoreConcept'
import Header from './components/Header'



// using object destructuring.. so insted of using props.image just we will write image (property)
// function CoreConcept({image,title,description}){


function App() {
  //components are ui basic building block
  // react apps are built by combining components
  // components jsx props state

  // why components?
  // reusable building blocks
  // related code lives together
  // sepration of concerns


  // jsx----
  // jsx: javascript syntax extension

  // component function must follow two rules--
  //name starts with uppercase character
  // returns renderable content

  // How react handles component and builds component tree

  // builtin components , custom components

  // static component , dynamic component
  
// setting html attributes dynamically and loading image files (continue from here...)

//props: React allows to pass data to components via concept called "Props" (1) props are custom html attributes set on components 2)React merges all props into a single object 3)Props are passed to the component function as the first argument by react)
// jsx code that uses a component                          (set props)     Component                                                 (receive props)  Component Function
// set common input data via custom html attributes(props) --------->      Defines internal logic + jsx code that should be rendered -------------->  Receives props parameter with configuration data
  return (
    <div>
      <Header/>
      <main>
       <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* in react concept of configuring component is called prop */}
            {/* <CoreConcept 
            title="Components" 
            description="The core UI building block."
            img={componentsImg}
            /> */}
            {/* alternate way of setting props attributes */}
            {/* <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            img={CORE_CONCEPTS[0].image}
            /> */}
            {/* for setting all four */}
           {
            CORE_CONCEPTS.map( (concept)=>{
             return <CoreConcept key={concept.title} title={concept.title} image={concept.image} description={concept.description}/>
            }
            )
           }

           <CoreConcept {...CORE_CONCEPTS[0]}/>

          

          </ul>
       </section>
        
      </main>
    </div>
  )
}

export default App
