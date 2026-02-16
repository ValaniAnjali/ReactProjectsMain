import { useState } from 'react'
import './App.css'
import Projectdetail from './components/Projectdetail'
import Sidebar from './components/Sidebar'
import AddProject from './components/AddProject'
import initialProjectData from "./components/ProjectData";

function App() {

  const [projects, setProjects] = useState(initialProjectData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [addMode, setAddMode] = useState(false);


  function addProjectHandler(title, description, task) {
    setProjects(prev => {
      const newProject = {
        id: Date.now(),
        title,
        description,
        Tasks: task ? [task] : []
      };
      return [...prev, newProject];
    });

    setAddMode(false);
  }

 
  function deleteProjectHandler(id) {
    setProjects(prev => prev.filter(p => p.id !== id));
    setSelectedProject(null);
  }

 
  function updateProjectHandler(id, newTitle, newDescription) {
    setProjects(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, title: newTitle, description: newDescription }
          : p
      )
    );

    setSelectedProject(prev =>
      prev
        ? { ...prev, title: newTitle, description: newDescription }
        : null
    );
  }

  function addTaskHandler(projectId, taskText) {
    if (!taskText.trim()) return;

    setProjects(prev =>
      prev.map(project =>
        project.id === projectId
          ? { ...project, Tasks: [...project.Tasks, taskText] }
          : project
      )
    );

    setSelectedProject(prev =>
      prev
        ? { ...prev, Tasks: [...prev.Tasks, taskText] }
        : prev
    );
  }


  function deleteTaskHandler(projectId, taskIndex) {
    setProjects(prev =>
      prev.map(project =>
        project.id === projectId
          ? {
              ...project,
              Tasks: project.Tasks.filter((_, index) => index !== taskIndex)
            }
          : project
      )
    );

    setSelectedProject(prev =>
      prev
        ? {
            ...prev,
            Tasks: prev.Tasks.filter((_, index) => index !== taskIndex)
          }
        : prev
    );
  }

  return (
    <div className='flex'>

      <Sidebar
        projects={projects}
        selectedProject={selectedProject}
        onProjectSelect={(project) => {
          setSelectedProject(project);
          setAddMode(false);
        }}
        onaddTask={() => {
          setAddMode(true);
          setSelectedProject(null);
        }}
      />

      {
        addMode
          ? <AddProject onSave={addProjectHandler} />
          : <Projectdetail
              project={selectedProject}
              onDelete={deleteProjectHandler}
              onUpdate={updateProjectHandler}
              onAddTask={addTaskHandler}
              onDeleteTask={deleteTaskHandler}
            />
      }

    </div>
  )
}

export default App
