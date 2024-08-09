import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Register from './components/Register'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'

const App = () =>
{

  const [darkMode, setDarkMode] = useState(false)

  const switchMode = (e) => {
    setDarkMode(e.target.checked)
  }

  return (
    <div className={`${ darkMode ? "bg-gray-900" : "bg-gray-200"} container h-dvh flex flex-col bg-gray-300`}>
      <Header 
        darkMode={ darkMode }/>
      <Nav 
        darkMode={ darkMode }/>
      <div className='flex justify-end gap-3 p-1 items-center'>
        <p className={`${darkMode ? "text-white" : "text-black"}`}>
          Dark mode?
        </p>
        <input
          type='checkbox'
          onClick={ (e) => switchMode(e) }
          checked={ darkMode }>
        </input>
      </div>
      {/*<Register />*/}
      <Body />
      <Footer />
    </div>
  )
}

export default App;
