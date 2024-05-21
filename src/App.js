import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Register from './components/Register'
import { useEffect } from 'react'

const App = () =>
{

  useEffect(() => 
  {
    fetch("/api").then(
      response => response.json()
    ).then(
      apiData => {
        //setData(apiData)
      }
    )
  }, [])

  return (
    <div className='container min-w-full flex flex-col bg-gray-300'>
      <Header />
      <Register />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
