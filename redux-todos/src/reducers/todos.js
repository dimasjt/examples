import uuid from 'uuid/v1';

export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
        },
      ];
    case 'DELETE_TODO':
      let todos = state.filter(todo => todo.id != action.id);

      return todos;
    default:
      return state;
  }
}

export function search(state = null, action) {
  if (action.type === 'SEARCH_TODOS') {
    return action.query;
  }
  return state;
}
