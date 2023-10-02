import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../actions';

const Input = () => {
  const dispatch = useDispatch()
    const [input, setInput] = useState('');
  
    const onAddClick = () => {
      if(input !== ''){
        dispatch(addTodoAction(input))
        setInput('');
      }
    }
  
    return(
      <div className='m-2 p-4 d-flex flex-row justify-content-between'>
        <Form.Control value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="add your task here!" />
        <Button onClick={onAddClick} variant="outline-primary m-1" size='sm'>Add</Button>
      </div>
    )
}

export default Input;