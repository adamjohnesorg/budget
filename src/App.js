import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () =>
{
  return (
    <div className='container min-w-full flex flex-col bg-gray-300'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
