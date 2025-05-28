import React, { useState } from "react";

const Modal = ({ isModalOpen, setIsModalOpen, setPendingTaskList }) => {
  const [inputValue, setInputValue] = useState("");

  const createNewtask = () => {
    setInputValue("");
    setIsModalOpen(false);
    setPendingTaskList((prev) => [...prev, inputValue]);
  };

  return (
    <div className={`modal-container ${isModalOpen ? "open" : "close"}`}>
      <div className="modal-body">
        <h3>New Task</h3>
        <p onClick={() => setIsModalOpen(false)} className="modal-close">
          X
        </p>
        <div className="task-form">
          <label>Your Task</label>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
          />
          <button onClick={createNewtask} className="create-new-task-btn">
            Create New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
