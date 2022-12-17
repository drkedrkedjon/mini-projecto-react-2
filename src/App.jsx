import React from 'react'
import Header from './components/Header'
import Diario from './components/Diario'
import './index.css'

export default function App() {
  return (
    <main className='main'>
      <Header />
      <Diario />
    </main>
  )
}