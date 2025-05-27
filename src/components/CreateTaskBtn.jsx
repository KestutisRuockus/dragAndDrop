import React from "react";

const CreateTaskBtn = ({ parentElemenId, onClick }) => {
  const handleClick = () => {
    createTask();
    onClick(true);
  };

  const createTask = () => {
    console.log(parentElemenId);
  };

  return (
    <button onClick={handleClick} className="create-task-btn">
      CreateTaskBtn
    </button>
  );
};

export default CreateTaskBtn;
