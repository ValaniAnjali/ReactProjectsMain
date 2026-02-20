import React, { useState, useEffect, useRef } from 'react'

const Projectdetail = ({
  project,
  onDelete,
  onUpdate,
  onAddTask,
  onDeleteTask
}) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskInput, setTaskInput] = useState(""); 
  const dialogRef = useRef();
  const [projectToDelete, setProjectToDelete] = useState(null);


  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
    }
  }, [project]);

  if (!project) {
    return <p className='p-10'>Please Select Project to View Detail</p>
  }

  function handleAddTask() {
    if (!taskInput.trim()) return;

    onAddTask(project.id, taskInput);
    setTaskInput(""); 
  }

  return (
    <div className='px-10 py-20'>

      {/* Title + Delete */}
      <div className='flex justify-between'>
        <input
          className='text-4xl font-bold border p-2'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className='bg-red-500 p-2 text-white'
          onClick={() => onDelete(project.id)}
        >
          Delete
        </button>
      </div>

      {/* Description */}
      <textarea
        className='border w-full mt-5 p-3'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className='bg-green-600 text-white mt-5 p-2'
        onClick={() => onUpdate(project.id, title, description)}
      >
        Save Changes
      </button>

      {/* ADD TASK INPUT SECTION */}
      <div className='mt-8 flex gap-2'>
        <input
          type="text"
          className='border p-2 flex-1'
          placeholder='Add new task...'
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <button
          className='bg-amber-600 text-white px-4'
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className='mt-5'>
        {(project.Tasks || []).map((task, index) => (
          <li
            key={index}
            className='flex justify-between items-center p-2 border-b'
          >
            <span>{task}</span>

            <button
              className='bg-red-500 text-white px-2 py-1 text-sm rounded'
              onClick={() => onDeleteTask(project.id, index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Projectdetail
