import { useState } from 'react'
import './App.css'
import rockImage from './assets/Rock.png'
import paperImage from './assets/Paper.png'
import scissorImage from './assets/Scissor.png'
import { useScore } from '../context/scoreContext'
import { ScoreBoard } from '../components/scoreBoard'

function App() {

  const { score, addScore } = useScore(0);

  return (
    <>
      <ScoreBoard />
    </>
  )
}

export default App
