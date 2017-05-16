export function addTodo(name) {
  return {
    type: 'ADD_TODO',
    name: name,
  };
};

export function deleteTodo(todoId) {
  return {
    type: 'DELETE_TODO',
    id: todoId,
  };
};

export function searchTodos(query) {
  return {
    type: 'SEARCH_TODOS',
    query,
  };
};
