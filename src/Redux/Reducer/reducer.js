import {
  AddToDo,
  DeleteToDo,
  CompleteToDo,
  EditToDo,
} from "../Actions/actionTypes";

const initialState = {
  tasks: [
    { id: 0, description: "Create a ToDo App", isDone: true },
    { id: 1, description: "Response to some eMails", isDone: false },
  ],
  };

const ToDos = (state = initialState, action) => {
  switch (action.type) {
    case AddToDo:
      return { ...state, tasks: state.tasks.concat(action.payload) };

    case DeleteToDo:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };

    case CompleteToDo:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case EditToDo:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                description: action.payload.description,
                isDone: false,
              }
            : el
        ),
      };

    default:
      return state;
  }
};

export default ToDos;
