import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
   const todoTextInputRef = useRef<HTMLInputElement>(null);

   const todosCtx = useContext(TodosContext);

   const handleFormSumbit = (e: React.FormEvent) => {
      e.preventDefault();

      const enteredText = todoTextInputRef.current!.value;

      todosCtx.addTodo(enteredText);
   }

   return (
      <form className={classes.form} onSubmit={handleFormSumbit}>
         <label htmlFor='text'>Todo text</label>
         <input type='text' id='text' ref={todoTextInputRef} />
         <button>Add Todo</button>
      </form>
   );
}

export default NewTodo;