import { defaultMaxListeners } from "events";
import React, { useState, ReactNode } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
   items: Todo[];
   addTodo: (text: string) => void,
   removeTodo: (id: string) => void,
}

export const TodosContext = React.createContext<TodosContextObject>({
   items: [],
   addTodo: () => { },
   removeTodo: (id: string) => { }
});

interface ContainerProps {
   children?: ReactNode;
}

const TodosContextProvider: React.FC<ContainerProps> = ({ children }) => {
   const [todos, setTodos] = useState<Todo[]>([]);

   const addTodoHandler = (text: string) => {
      const newTodo = new Todo(text);

      setTodos(prevTodos => prevTodos.concat(newTodo))
   }

   const removeTodoHandler = (id: string) => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
   }

   const contextValue: TodosContextObject = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
   };

   return (
      <TodosContext.Provider value={contextValue}>
         {children}
      </TodosContext.Provider>
   )
}

export default TodosContextProvider;