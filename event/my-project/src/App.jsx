import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Nav'
import Events from './sections/Events'
import Footer from './sections/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='relative'>
     
        <Nav/>
      
      <section className="xl:padding-l wide:padding-r padding-b">
        <Events/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
      </main>
    </>
  )
}

export default App
