import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputBar from '../../components/InputBar.js'
import Todo from './Todo.js'
import uuid from 'node-uuid'
import { fetchTodos, addTodo, toggleTodo, removeTodo } from '../actions'
import { getTodos } from '../selectors'

class Todos extends Component {
  componentDidMount () {
    this.fetchTodos()
  }

  fetchTodos = () => this.props.fetchTodos()

  addTodo = name => {
    const newTodo = { id: uuid.v4(), name, done: false }
    this.props.addTodo(newTodo)
  }

  removeTodo = id => {
    this.props.removeTodo(id)
  }

  toggleTodo = id => {
    this.props.toggleTodo(id)
  }

  render () {
    return (
      <div className='form-group'>
        <InputBar onSubmit={this.addTodo} />
        <ul className='list-group'>
          {this.props.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggleTodo={this.toggleTodo}
              onRemoveTodo={this.removeTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

// use reselect if getTodos is expensive
const mapStateToProps = state => ({
  todos: getTodos(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodos,
      addTodo,
      toggleTodo,
      removeTodo
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
