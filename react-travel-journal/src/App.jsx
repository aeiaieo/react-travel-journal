// import { useState } from 'react'
// import ReactDOM from 'react-dom/client'
import React from 'react'
import Header from "./components/Header"
import Cards from "./components/Cards"
import './App.css'
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <>
      <Cards
        key={item.id}
        {...item}
      />
      <hr className="divider"/>
      </>
    )
  })
  return (
    <div>
      <Header />
      {cards}
    </div>
  )
}