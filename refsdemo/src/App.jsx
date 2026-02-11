import './App.css'
import Player from './components/Player'
import TimerChallenge from './components/TimerChallenge'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </div>
    </>
  )
}

export default App
//Refs & Portals
//Manage value with refs that shouldnt be a state
//Accessing DOM elements with refs