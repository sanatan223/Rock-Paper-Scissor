import { useState } from 'react'
import './App.css'
import rockImage from './assets/Rock.png'
import { useScore } from '../context/scoreContext'
import { ScoreBoard } from '../components/scoreBoard'
import { Moves } from '../components/Moves'
import { MatchingSection } from '../components/MatchingSection'

function App() {
  return (
    <>
      <ScoreBoard />
      <MatchingSection />
      <Moves />
    </>
  )
}

export default App
