 const initialState = [
        {
          id: 0,
          text: "Taste Javascript",
          completed: true
        },
        {
          id: 1,
          text: "Buy a unicorn",
          completed: false
        },
      ];

const todos = (state = initialState, action) => {
 
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'MARKALLCOMPLETED_TODO': 
      return state.map(todo =>
        (true)
          ? {...todo, completed: true}
          : todo
      )

    case 'DELETE_TODO': 
      return state.filter(todo =>
        (todo.id !== action.id)
      )

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos