import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './content'

import {Component1,Component2,Component3,Component4,Component5} from './component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
      <Content />
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
    
      <Footer />
    </>
      
  )
}

export default App

//fragments are empty tags
//all the tags must be wrapped using any tag or fragments