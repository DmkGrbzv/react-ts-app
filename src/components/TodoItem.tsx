import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface TodoItemProps{
  todo: ITodo,
}

const TodoItem: FC<TodoItemProps>=({todo})=>{
  return (
    <div>
      <input type="checkbox" checked={todo.completed}/>
      <div>{todo.id}. {todo.title}</div>
    </div>
  )
}

export default TodoItem