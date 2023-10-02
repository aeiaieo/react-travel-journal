// import { useState } from 'react'
import React from 'react'
// import ReactDOM from 'react-dom/client'
import Header from "./components/Header.jsx"
import Cards from "./components/Cards.jsx"
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      <Cards
        img="https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1274&q=80"
      />
      <Cards
        img="https://images.unsplash.com/photo-1544885935-98dd03b09034?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      />
    </div>

  )
}
