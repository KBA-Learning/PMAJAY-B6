import React from 'react'
import Logos from '../components/Logos'
import IncrementButton from '../components/IncrementButton'

const HomePage = () => {
  return (
    <>
    <Logos />

    <IncrementButton startNumber={1} incrementNumber={100}/>
    <IncrementButton startNumber={10} incrementNumber={1} />
    <IncrementButton startNumber={100} incrementNumber={10} />

    
    </>
  )
}

export default HomePage