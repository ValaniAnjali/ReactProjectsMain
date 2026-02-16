import React from 'react'

const Sidebar = ({ projects, onProjectSelect, onaddTask }) => {

  return (
    <div className='bg-amber-300 w-xl h-screen p-5 py-10'>
      <ul>
        {
          projects.map((project) => (
            <li
              key={project.id}
              className='p-5 bg-amber-500 m-2 text-2xl flex justify-center cursor-pointer'
              onClick={() => onProjectSelect(project)}
            >
              {project.title}
            </li>
          ))
        }

        <li
          className='p-5 text-white bg-amber-700 m-2 text-2xl flex justify-center font-bold cursor-pointer'
          onClick={onaddTask}
        >
          Add Project
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
