import React, { useContext } from 'react';
import Todo from '../models/todo';
import { TodosContext } from '../store/todos-context';

import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ item: Todo }> = (props) => {
   const todosCtx = useContext(TodosContext)

   return (
      <li className={classes.item} onClick={() => todosCtx.removeTodo(props.item.id)}>{props.item.text}</li>
   );
}

export default TodoItem;