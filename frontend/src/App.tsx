import { useState, useEffect } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const [data, setData] = useState<string | null>(null)
  const navigate = useNavigate()

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
      <p className="text-center">{data ? data : 'Loading...'}</p>
      <div className='container mx-auto px-4 py-8 align-middle text-center'>
        <h1 className="text-3xl font-bold text-center">Welcome to SecBOX</h1>
        <p className="text-center mt-4">このゲームは、セキュリティを学ぶゲームです。</p>
        <button className="bg-orange-500 hover:bg-white text-black font-bold py-2 px-4 rounded mt-15" onClick={() => navigate('/level1-1')}>
          始める
        </button>
      </div>
    </>
  )
}

export default App
