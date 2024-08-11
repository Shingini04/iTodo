import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useTaskContext } from './TaskContext';

function TaskList() {
  const { tasks, addTask, deleteTask } = useTaskContext();
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask({ 
        id: Date.now().toString(), 
        text: newTask,
        description,
        deadline: deadline ? new Date(deadline).toISOString() : null,
        priority,
        category,
        subtasks: [],
        attachments: [],
        recurring: false,
      });
      setNewTask('');
      setDescription('');
      setDeadline('');
      setPriority('medium');
      setCategory('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <div className="space-y-4 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          className="w-full p-2 border rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <div className="flex space-x-4">
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="p-2 border rounded"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="p-2 border rounded bg-white"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={handleAddTask}
          className="bg-primary text-white p-2 rounded hover:bg-pink-600 transition duration-200 transform hover:scale-105 active:scale-95"
        >
          <FaPlus className="inline-block mr-2" /> Add Task
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="bg-white p-4 rounded shadow group">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{task.text}</span>
              <div>
                <span className={`ml-2 px-2 py-1 rounded text-xs ${
                  task.priority === 'high' ? 'bg-red-200 text-red-800' :
                  task.priority === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                  'bg-green-200 text-green-800'
                }`}>
                  {task.priority}
                </span>
                {task.category && (
                  <span className="ml-2 px-2 py-1 rounded bg-gray-200 text-gray-800 text-xs">
                    {task.category}
                  </span>
                )}
                <button onClick={() => deleteTask(task.id)} className="ml-2 text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Deadline: {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'No deadline'}
            </p>
            <p className="text-sm text-gray-600 mt-2 hidden group-hover:block">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;