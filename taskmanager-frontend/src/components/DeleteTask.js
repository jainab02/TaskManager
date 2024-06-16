import React from "react";

const DeleteTask = ({ taskId, setShowConfirmation }) => {
  return (
    <button
      className="delete"
      onClick={() => {
        setShowConfirmation(taskId);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteTask;
