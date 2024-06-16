// controllers/taskController.js
import Task from "../models/taskModel.js";

// Create a new task
export const createTask = async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Retrieve all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
};

// Retrieve a single task by ID
export const getTaskById = async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send({message :"Data Not Found"});
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
};

// Update a task by ID
export const updateTaskById = async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true
    });
    if (!task) {
      return res.status(404).send({message :"Data Not Found"});
    }
    task.message = "Updated Successfully";
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Delete a task by ID
export const deleteTaskById = async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      return res.status(404).send({message :"Data Not Found"});
    }
    task.message = "Deleted Successfully";
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
};
