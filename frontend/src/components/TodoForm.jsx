import { Button, Flex, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Radio, RadioGroup } from '@chakra-ui/react' 
  import { Select } from '@chakra-ui/react' 
import { useDispatch, useSelector } from 'react-redux'
import { makeApiCallToSaveTodo, updateTodoForm } from '../Redux/actions'

const TodoForm = () => {
    const [value, setValue] = React.useState('1')
    const formData = useSelector((store)=>store.todoFormData)
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
      dispatch(makeApiCallToSaveTodo(formData))  
    }
    // console.log(formData)/
  return (
    <Flex>
      <Flex as={'form'} onSubmit={handleSubmit} direction={'column'} gap={'20px'}>
        <FormControl>
            <FormLabel>Todo Name</FormLabel>
            <Input onChange={(e)=>{dispatch(updateTodoForm(e.target.value,e.target.name))}} type='text' placeholder='Enter Todo name'  name='todoName'/>       
        </FormControl> 
         
        <FormControl>
            <FormLabel>Assignee Name</FormLabel>
                <Select placeholder='Select option' name='assignee' onChange={(e)=>{dispatch(updateTodoForm(e.target.value,e.target.name))}}>
                    <option value='Admin'>Admin</option>
                    <option value='Student'>Student</option>
                    <option value='Guest'>Guest</option>
                </Select>      
        </FormControl>

        <FormControl>
            <FormLabel>Priority</FormLabel>
                <RadioGroup  value={formData.priority} name='priority' onChange={(value)=>{dispatch(updateTodoForm(value,'priority'))}}>
                    <Stack direction='row'>
                        <Radio value='High'>High</Radio>
                        <Radio value='Medium'>Medium</Radio>
                        <Radio value='Low'>Low</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>

       

        <Button type='submit'>Submit</Button>
      </Flex>
    </Flex>
  )
}

export default TodoForm