import React from 'react'
import Navbar from './component/Nav-bar'
import Alert from './component/Alert'
import About from './component/About'
import NoteState from '../src/notes/NoteState'
import { Routes, Route } from 'react-router-dom'
import { Home } from './component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is an alert message!!!"/>
        <div style={{marginTop: "70px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>
  )
}
