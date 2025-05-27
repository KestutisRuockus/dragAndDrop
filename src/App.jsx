import { useState } from "react";
import CreateTaskBtn from "./components/CreateTaskBtn";
import Modal from "./components/Modal";

const TaskElement = ({ task }) => {
  return <p className="task-element">{task}</p>;
};

function App() {
  const [pendingTaskList, setPendingTaskList] = useState([
    "Shopping",
    "wash car",
  ]);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <div id="pending" className="pending">
        <h3>Pending</h3>
        <div className="task-container">
          {pendingTaskList.map((task) => (
            <TaskElement key={task} task={task} />
          ))}
        </div>
        <CreateTaskBtn onClick={setIsModalOpen} parentElemenId="pending" />
      </div>
      <div id="inProgress" className="in-progress">
        <h3>In Progress</h3>
        <div className="task-container">Tasks container</div>
      </div>
      <div id="completed" className="completed">
        <h3>Completed</h3>
        <div className="task-container">Tasks container</div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
