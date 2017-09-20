let nextTodoId = 2
export const addTodo = text => {
  console.log("addToDo");
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  console.log("setFilter");
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  console.log("toggleToDo");
  return {
    type: 'TOGGLE_TODO',
    id
  }
}