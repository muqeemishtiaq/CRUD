import React from 'react'
import Layout from './components/shared/Layout'
import AllCakes from './pages/AllCakes'
import {Routes, Route} from 'react-router'
import AddCake from './pages/AddCake'
const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllCakes />} />
          <Route path="/add-cake" element={<AddCake />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
