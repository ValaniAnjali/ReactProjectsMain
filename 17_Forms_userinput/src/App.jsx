import Header from './components/Header'
import Login from './components/LoginUseStateCustomInput'
// import Login from './components/LoginuseRefFormSubmission'
import Signup from './components/Signup'

// Form : collection of Input fields
// formsubmission - via state,refs,via formData and native browser features
function App() {

  return (
  <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  )
}

export default App
