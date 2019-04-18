export const addTodo = () => ({
  type: 'ADD_TODO',
  payload: { text: 'Recently Added Todo' },
});

export const markAsCompleted = id => ({
  type: 'MARK_AS_COMPLETED',
  payload: { id },
});
