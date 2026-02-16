import React, { useRef } from 'react'

const AddProject = ({ onSave }) => {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let taskRef = useRef();

  function saveDetails(e) {
    e.preventDefault();

    onSave(
      titleRef.current.value,
      descriptionRef.current.value,
      taskRef.current.value
    );

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    taskRef.current.value = "";
  }

  return (
    <div className='bg-amber-200 w-full'>
      <form className='m-5 p-5 flex flex-col' onSubmit={saveDetails}>

        <input type='text'
          className='border my-5 p-5 text-2xl'
          placeholder='Enter Title'
          ref={titleRef}
        />

        <input type='text'
          className='border my-5 p-5 text-2xl'
          placeholder='Enter Description'
          ref={descriptionRef}
        />

        <input type='text'
          className='border my-5 p-5 text-2xl'
          placeholder='Enter Task'
          ref={taskRef}
        />

        <button className='bg-amber-950 p-5 text-amber-200 font-bold'>
          Save
        </button>

      </form>
    </div>
  )
}

export default AddProject
