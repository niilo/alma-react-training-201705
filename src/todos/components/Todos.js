import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputBar from '../../components/InputBar.js'
import Todo from './Todo.js'
import * as api from '../api'
import setTodos from '../actions'

class Todos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    this.fetchTodos()
  }

  fetchTodos = () => api.getTodos().then(todos => this.props.setTodos(todos))

  addTodo = name => api.addTodo({ name, done: false }).then(this.fetchTodos)

  removeTodo = id => api.deleteTodo(id).then(this.fetchTodos)

  toggleTodo = id => api.toggleTodo(id).then(this.fetchTodos)

  render () {
    return (
      <div className='form-group'>
        <InputBar onSubmit={this.addTodo} />
        <ul className='list-group'>
          {this.state.todos.map(todo => (
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

const mapStateToProps = stete => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setTodos
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
