import React from 'react'
import Navbar from './component/Nav-bar'
import About from './component/About'
import NoteState from '../src/notes/NoteState'
import { Routes, Route } from 'react-router-dom'
import { Home } from './component/Home'

export default function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </NoteState>
    </>
  )
}
