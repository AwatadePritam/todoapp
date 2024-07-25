import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, fetchAllTodos } from '../Redux/actions'
import { Button, Flex, Text } from '@chakra-ui/react'
 
const AllTodos = () => {
    const allTodos = useSelector(store => store.allTodos)

    const flagToFetchAllTodos = useSelector(store => store.flagToFetchAllTodos)
    const dispatch = useDispatch()

    useEffect(() => {
        if(flagToFetchAllTodos){
            dispatch(fetchAllTodos())
            
        }
    },[ flagToFetchAllTodos])

  return (
    <Flex direction={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Text>All Todos</Text>
        {
            !allTodos?(<>
            <Text>Loading....</Text>
            </>):(
                <Flex direction={'column'} gap={'10px'}>
                    {
                        allTodos.length>0 &&(
                            allTodos.map(item=>(
                                <Flex justifyContent={'left'} alignItems={'center'} gap={'10px'} key={item._id}>
                                    <Text>{item.todoName}</Text>
                                    <Text>{item.assignee}</Text>
                                    <Text>{item.priority}</Text>
                                    <Button colorScheme='red' onClick={()=>{dispatch(deleteTodo(item._id))}}>Delete</Button>
                                </Flex>
                            ))
                        )
                    }
                </Flex>
            )
        }
    </Flex>
  )
}

export default AllTodos