import React, { useState, useEffect } from "react";
import axiosInstance from "../configs/axiosConfig";
import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TaskList = ({ refresh, onRefresh }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(-1);

  const handleDelete = () => {
    axiosInstance
      .delete(`/tasks/${showConfirmation}`)
      .then(() => onRefresh()) // Refresh the task list
      .catch((error) => console.error("Error deleting task:", error));
    setSelectedTask(null);

    setShowConfirmation(-1);
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const fetchTasks = () => {
    axiosInstance
      .get("/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };
  console.log(tasks, "tasks");
  return (
    <div className="p-3 me-4">
      <h2 className="text-light text-center">Tasks List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task._id}
            className={`${
              task.status === "Completed" ? "bg-success" : "bg-warning"
            }`}
          >
            <div class="card my-3 me-3">
              <div class="card-body d-flex flex-column p-3">
                <h5 class="card-title">Title: {task.title}</h5>
                <p class="card-text">Description: {task.description}</p>
              </div>
            </div>
            <div>
              <button className="edit" onClick={() => setSelectedTask(task)}>
                Edit
              </button>
              <DeleteTask
                taskId={task._id}
                setShowConfirmation={setShowConfirmation}
              />
            </div>
          </li>
        ))}
      </ul>
      {selectedTask && (
        <UpdateTask
          task={selectedTask}
          onUpdate={onRefresh}
          onClose={() => setSelectedTask(null)}
        />
      )}
      <Modal
        show={showConfirmation !== -1}
        onHide={() => setShowConfirmation(-1)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(-1)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskList;
