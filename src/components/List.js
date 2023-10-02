import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deleteTodoAction, updateTodoAction } from '../actions';


const List = ({data, pending}) => {
  const dispatch = useDispatch()
    
    return(
      <div className='d-flex flex-column'>
      <h4 className='ms-3 p-2 pb-0 row'>{pending ? "Pending" : "Completed"}</h4>
      <div className='p-2 row w-100'>
          <div>
            {data?.map(item => {
                return (
                  <div key={item._id} className='border border-top-0 rounded d-flex flex-row justify-content-between col p-2 m-2'>
                    <p className= {pending ? 'fw-bold' :
                    'text-decoration-line-through'} as="li">{item.text}  
                    </p>
                    <div className='col-2 d-flex justify-content-end align-items-center'>
                      {pending ?
                      <Button variant="outline-success p-1 m-2" size='sm' onClick={() => dispatch(updateTodoAction(item._id))}>Done</Button>
                      : <Button variant="outline-danger p-1 m-2" size='sm' onClick={() => dispatch(deleteTodoAction(item._id))}>Delete</Button>
                    }
                    </div> 
                  </div>)
            }
            )}
          </div>
          </div>
        </div>
  
    )
}

export default List;
