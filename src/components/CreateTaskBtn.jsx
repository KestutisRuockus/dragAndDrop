import React from "react";

const CreateTaskBtn = ({ onClick }) => {
  const handleClick = () => {
    onClick(true);
  };

  return (
    <button onClick={handleClick} className="create-task-btn">
      CreateTaskBtn
    </button>
  );
};

export default CreateTaskBtn;
