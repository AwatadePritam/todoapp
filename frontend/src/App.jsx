import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import { Flex } from '@chakra-ui/react'
import AllTodos from './components/AllTodos'

function App() {
  return (
   <Flex w={'100%'} direction={'column'} gap={'30px'} justifyContent={'center'} alignItems={'center'}>
    <TodoForm/>
    <AllTodos/>
   </Flex>
  )
}

export default App
