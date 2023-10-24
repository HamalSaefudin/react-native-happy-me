import React, { useEffect } from 'react'
import RNHappyMeModule, { Counter } from 'react-native-happy-me'

const App = () => {
  useEffect(() => {
    console.log(RNHappyMeModule)
  })

  return <Counter label='john' />
}

export default App
