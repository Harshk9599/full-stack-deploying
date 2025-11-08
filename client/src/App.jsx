import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    // Dynamically choose the backend URL
    const API_BASE =
      window.location.hostname === "localhost"
        ? "http://localhost:4000"
        : "http://deploy.smartdoorlocks.in"  // use https later when SSL is ready

    fetch(`${API_BASE}/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching message", err)
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



// import { useState, useEffect } from 'react'
// import './App.css'

// function App() {
//   const [message, setMessage] = useState("")

//   useEffect(() => {
//     fetch("http://localhost:4000/api/message")
//     // fetch("/api/message")  --> for proxy server
//     .then((res) => res.json())
//     .then((data) => setMessage(data.message))
//     .catch((err) =>{
//       console.error("Error fetching message", err);
//     })
//   }, [])

//   return (
//     <>
//       <h1>Welcome to HK-Developers Frontend</h1>
//       <h2>data :- {message}</h2>
//     </>
//   )
// }

// export default App
