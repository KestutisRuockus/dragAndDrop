import { useState } from "react";
import CreateTaskBtn from "./components/CreateTaskBtn";
import Modal from "./components/Modal";

const TaskElement = ({ task, column, setDraggedTask }) => {
  const handleDragStart = () => {
    setDraggedTask({ task, from: column });
  };
  return (
    <p draggable onDragStart={handleDragStart} className="task-element">
      {task}
    </p>
  );
};

function App() {
  const [pendingTaskList, setPendingTaskList] = useState([
    "Shopping",
    "wash car",
  ]);
  const [inProgressList, setInProgressList] = useState([
    "Keep Learning ReactJS",
  ]);
  const [completedList, setCompletedList] = useState([
    "Go for a walk",
    "Do To Do List",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleOnDrop = (currentColumn) => {
    if (!draggedTask || draggedTask.from === currentColumn) return;

    const { task, from } = draggedTask;

    if (from === "pending") {
      setPendingTaskList((prev) => prev.filter((t) => t !== task));
    } else if (from === "inProgress") {
      setInProgressList((prev) => prev.filter((t) => t !== task));
    } else if (from === "completed") {
      setCompletedList((prev) => prev.filter((t) => t !== task));
    }

    if (currentColumn === "pending") {
      setPendingTaskList((prev) => [...prev, task]);
    } else if (currentColumn === "inProgress") {
      setInProgressList((prev) => [...prev, task]);
    } else if (currentColumn === "completed") {
      setCompletedList((prev) => [...prev, task]);
    }

    setDraggedTask(null);
  };

  return (
    <div className="container">
      <div
        id="pending"
        className="pending"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleOnDrop("pending")}
      >
        <h3>Pending</h3>
        <div className="task-container">
          {pendingTaskList.map((task) => (
            <TaskElement
              key={task}
              task={task}
              column={"pending"}
              setDraggedTask={setDraggedTask}
            />
          ))}
        </div>
        <CreateTaskBtn onClick={setIsModalOpen} />
      </div>
      <div
        id="inProgress"
        className="in-progress"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleOnDrop("inProgress")}
      >
        <h3>In Progress</h3>
        <div className="task-container">
          {inProgressList.map((task) => (
            <TaskElement
              key={task}
              task={task}
              column={"inProgress"}
              setDraggedTask={setDraggedTask}
            />
          ))}
        </div>
      </div>
      <div
        id="completed"
        className="completed"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleOnDrop("completed")}
      >
        <h3>Completed</h3>
        <div className="task-container">
          {completedList.map((task) => (
            <TaskElement
              key={task}
              task={task}
              column={"completed"}
              setDraggedTask={setDraggedTask}
            />
          ))}
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setPendingTaskList={setPendingTaskList}
      />
    </div>
  );
}

export default App;
