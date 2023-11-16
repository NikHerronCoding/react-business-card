import { useState } from 'react'

// component imports
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

//assets and css
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  )
}

export default App
