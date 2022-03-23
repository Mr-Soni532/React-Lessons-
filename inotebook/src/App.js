import React, { useState } from 'react'
import Navbar from './component/Nav-bar'
import Alert from './component/Alert'
import About from './component/About'
import NoteState from '../src/notes/NoteState'
import { Routes, Route } from 'react-router-dom'
import { Home } from './component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Login from './component/Login'
import Signup from './component/Signup'

export default function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert} />
        <Container style={{ marginTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert}/>} />
            <Route path="/about" element={<About showAlert={showAlert}/>} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
          </Routes>
        </Container>
      </NoteState>
    </>
  )
}
