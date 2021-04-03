import { AddToDo, DeleteToDo, CompleteToDo, EditToDo } from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: AddToDo,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DeleteToDo,
    payload,
  };
};

export const completeTodo = (payload) => {
  return {
    type: CompleteToDo,
    payload,
  };
};

export const editTodo = (payload) => {
  return {
    type: EditToDo,
    payload,
  };
};
