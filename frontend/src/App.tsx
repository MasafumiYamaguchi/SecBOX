import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/')
      .then(response => response.text())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <Header />
      <p className="text-center">{data ? data : 'Loading...'}</p>
    </>
  )
}

export default App
