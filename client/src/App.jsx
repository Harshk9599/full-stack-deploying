import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
    // fetch("/api/message")  --> for proxy server
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) =>{
      console.error("Error fetching message", err);
    })
  }, [])

  return (
    <>
      <h1>Welcome to HK-Developers Frontend</h1>
      <h2>data :- {message}</h2>
    </>
  )
}

export default App
