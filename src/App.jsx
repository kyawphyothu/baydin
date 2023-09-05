import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Home />
      <Footer />
    </div>
  )
}
