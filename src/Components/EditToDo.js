import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { editTodo } from "../Redux/Actions/action";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditToDo = ({ task }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editInput, setEditInput] = useState("");
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditInput("");
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#4696e5"
          className="bi bi-pencil-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 style={{ margin: 0, padding: 0, color: "#7c7c7c" }}>
          Edit To Do...
        </h3>
        <form>
          <input
            type="text"
            id="ModalInput"
            placeholder={task.description}
            value={editInput}
            onChange={(event) => setEditInput(event.target.value)}
          />
          <button
            className="Modal-Btn"
            onClick={() => {
              editInput.trim()
                ? dispatch(editTodo({ id: task.id, description: editInput }))
                : alert("No changes were made!!");
              closeModal();
              setEditInput("");
            }}
          >
            Submit
          </button>
          <button className="Modal-Btn" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default connect()(EditToDo);
