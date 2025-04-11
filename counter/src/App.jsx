import { useState } from 'react'
import Counter from './pages/Counter'
import { BrowserRouter, Routes, Route } from "react-router-dom";

 

function App() {
   

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Counter />}>
      </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
