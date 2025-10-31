import React from 'react'
import {Link,Routes,Route, Router} from "react-router-dom"

const Asosiyoyna = () => {
  return (
    <>
      <Router>
      <nav>
        <Link to="/">Bosh sahifa</Link>
        <Link to="/about">Ma'lumot</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={count}/>
        <Route path='/about' />
      </Routes>
    </Router>
    </>
  )
}

export default Asosiyoyna
