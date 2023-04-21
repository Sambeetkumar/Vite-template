import './App.css'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
function App() {

  return (
    <div className='container mx-auto p-4 w-[90%] md:w-[85%]'>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default App
