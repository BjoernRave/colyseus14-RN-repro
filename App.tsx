import AsyncStorage from '@react-native-community/async-storage'
import { Buffer } from 'buffer'
import React, { FC } from 'react'
import { Text } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { Client } from 'colyseus.js'

export const useColyseus = (url: string) => {
  const [colyseus, setColyseus] = useState<Client>(null)

  useEffect(() => {
    const instance = new Client(url)
    setColyseus(instance)
  }, [])

  return colyseus
}

if (typeof window === 'undefined') {
  Object.defineProperty(window, 'localStorage', {
    value: AsyncStorage,
    configurable: true,
    enumerable: true,
    writable: true,
  })
}

global.Buffer = Buffer

const App: FC<Props> = ({}) => {
  const colyseus = useColyseus('')

  return <Text>Test</Text>
}

export default App

interface Props {}
