

import React, { useState } from 'react';
import axiosInstance from '../configs/axiosConfig';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post('/tasks', { title, description, status })
      .then(() => {
        setTitle('');
        setDescription('');
        setStatus('Pending');
        onAdd();  // Refresh the task list
      })
      .catch(error => console.error('Error adding task:', error));
  };

  return (
    <form onSubmit={handleSubmit} className='bg-black'>
      <input
        type="text"
        className='bg-black text-white'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        minLength={1}
        maxLength={50}
        placeholder="Title"
        required
      />
      <input
        type="text"
        className='bg-black text-white'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        minLength={1}
        maxLength={100}
        required
      />
      <select
        value={status}
        className='bg-black text-white'
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className='btn btn-primary my-3'>Add Task</button>
    </form>
  );
};

export default AddTask;
