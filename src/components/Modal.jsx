import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div className={`modal-container ${isModalOpen ? "open" : "close"}`}>
      <div className="modal-body">
        <h3>New Task</h3>
        <p onClick={() => setIsModalOpen(false)} className="modal-close">
          X
        </p>
        <div className="task-form">
          <label>Your Task</label>
          <input type="text" />
          <button className="create-new-task-btn">Create New Task</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
