import { useState } from 'react';
import Input from './Input';
import List from './List';
import { useSelector } from 'react-redux';

const testdata = [
  {_id: '1', text: 'This is my First task', markDone: false},
  {_id: '2', text: 'This is my Second task', markDone: true},
  {_id: '3', text: 'This is my Third task', markDone: false},
  {_id: '4', text: 'This is my Fourth task', markDone: true},
];

function Main() {
  const data = useSelector((state) => state.todos)

  return (
    <div className="container">

      <div className='text-center m-4'>
        <p className='fs-2'>Welcome to GTL!</p>
      </div>

      <Input/>

      <List 
      data={data.filter(item => item.markDone === false)} 
      pending={true}/>

      <List 
      data={data.filter(item => item.markDone === true)} 
      pending={false}/>
    </div>
  );
}

export default Main;
