import React from 'react';

import { Button, Text, View } from 'react-native';

import { connect } from 'react-redux';

/**
 * STUDY_NODE: This 'bindActionCreator' will, automaticaly, call dispatch with our action.
 *
 * This have the same effect of: "addTodo: () => dispatch({ type: 'ADD_TODO', text: 'Recently Added Todo' })"
 * OR
 * Calling <Text onPress{() => dispatch({ type: 'ADD_TODO', text: 'Recently Added Todo' })}
 */
import { bindActionCreators } from 'redux';

import * as TodosActions from '~/store/actions/todos';

const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }}>
    {todos.map(todo => (
      <Text
        onPress={() => markAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Add Todo" />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

/**
 * STUDY_NOTE:
 * MapDispatchToProps is an aux function to dispatch actions. The same result can be getted destructuring the dispatch method
 * on create component (where is destructured props).
 */
// const mapDispatchToProps = dispatch => ({
//   addTodo: () => dispatch({ type: 'ADD_TODO', text: 'Recently Added Todo' }),
//   markAsCompleted: id => dispatch({ type: 'MARK_AS_COMPLETED', id }),
// });

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
