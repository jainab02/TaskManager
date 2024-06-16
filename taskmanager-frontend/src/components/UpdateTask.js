

import React, { useState } from 'react';
import axiosInstance from '../configs/axiosConfig';

const UpdateTask = ({ task, onUpdate, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.put(`/tasks/${task._id}`, { title, description, status })
      .then(() => {
        onUpdate();  // Refresh the task list
        onClose();   // Close the update form
      })
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className='btn btn-primary my-3'>Update Task</button>
      <button type="button"className='btn btn-danger mb-3' onClick={onClose}>Cancel</button>
    </form>
  );
};

export default UpdateTask;
