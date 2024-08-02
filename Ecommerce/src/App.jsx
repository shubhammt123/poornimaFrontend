import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router'

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
