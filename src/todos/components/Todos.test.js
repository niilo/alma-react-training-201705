import React from 'react'
import { shallow } from 'enzyme'
import { Todos } from './Todos'

const todo1 = [
  {
    id: '1',
    name: 'Go to gym',
    done: true
  }
]

const todo2 = [
  {
    id: '2',
    name: 'Learn some jest',
    done: false
  }
]

test('matches snapshot', () => {
  const todos = todo1.concat(todo2)
  expect(shallow(<Todos todos={todos} />)).toMatchSnapshot()
})
