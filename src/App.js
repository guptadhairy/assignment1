import React from 'react'
import "../src/App.css"
import Card from './components/Card'

const App = () => {
  return (
    <div className="landing">
        <div className='flex justify-center items-center h-full w-full'>
        <Card />
        </div>
    </div>
  )
}

export default App