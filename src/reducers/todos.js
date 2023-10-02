const initialState = [
    {_id: '1', text: 'This is my First task', markDone: false},
    {_id: '2', text: 'This is my Second task', markDone: true},
    {_id: '3', text: 'This is my Third task', markDone: false},
    {_id: '4', text: 'This is my Fourth task', markDone: true},
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': 
        return [...state, 
            {
            _id: action.text.trim(), 
            text: action.text, 
            markDone: false
          }]
        case 'DELETE' :
            return state.filter(todo => todo._id !== action.id)
        case 'UPDATE' :
            return state.map(todo =>
                (todo._id === action.id)
                  ? {...todo, markDone: true}
                  : todo)
        default:
            return state;
    }
  }
  
  export default todos
  