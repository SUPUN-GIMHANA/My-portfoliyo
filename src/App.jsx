// import React from 'react'
// import Navbar from './Component/Navbar/Navbar'
// import About from './Component/About/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (

    
//     <div>
//       <Navbar/>
//       <About/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import About from './Component/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import Project from './Component/Project/Project';



const App = () => {
  return (


    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>

  )
}

export default App