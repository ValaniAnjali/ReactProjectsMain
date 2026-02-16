
// import { useState } from 'react'
// import NewProject from './components/NewProject'
// import NoProjectselected from './components/NoProjectselected'
// import ProjectsSidebar from './components/ProjectsSidebar'
// import SelectedProject from './components/SelectedProject';

// function App() {
//   const [projectsState,setProjectsState]=useState({
//     selectedProjectId:undefined,
//     projects:[],
//     tasks:[]
//   });

//   // function handleAddTask(text){
//   //    setProjectsState(prevState=>{
//   //     const taskId=Math.random();
//   //     const newTask={
//   //       text:text,
//   //       projectId:prevState.selectedProjectId,
//   //       id:taskId,
//   //     };
//   //      if (project.id === selectedProjectId){
//   //       return{
//   //       ...prevState,
//   //       tasks:[...prevState.tasks,newTask]
        
//   //     };
//   //      }
//   //      return projectsState;
      
//   //   })
//   // }

//   function handleAddTask(text) {
//   setProjectsState(prevState => {
//     const taskId = Math.random().toString();

//     const updatedProjects = prevState.projects.map(project => {
//       if (project.id === prevState.selectedProjectId) {
//         return {
//           ...project,
//           tasks: [
//             ...project.tasks,
//             {
//               id: taskId,
//               text: text
//             }
//           ]
//         };
//       }
//       return project;
//     });

//     return {
//       ...prevState,
//       projects: updatedProjects
//     };
//   });
// }

//   function handleDeleteTask(){

//   }

//   function handleSelectProject(id){
//     setProjectsState((prevState)=>{
//       return{
//         ...prevState,
//         selectedProjectId:id,
//       }
//     })
//   }

//   function handleStartAddProject(){
//     setProjectsState(prevState=>{
//       return {
//         ...prevState,
//         selectedProjectId:null,
//       }
//     });
//   }

//   function handleCancelAddProject(){
//     setProjectsState(prevState=>{
//       return {
//         ...prevState,
//         selectedProjectId:undefined,
//       }
//     });
//   }

//   function handleDeleteProject(){
//      setProjectsState(prevState=>{
//       return {
//         ...prevState,
//         selectedProjectId:undefined,
//         projects:prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId),
//       };
//     });
//   }


//   function handleAddProject(projectData){
//     setProjectsState(prevState=>{
//       const projectId=Math.random();
//       const newProject={
//         ...projectData,
//         id:projectId,
//       };
//       return{
//         ...prevState,
//         projects:[...prevState.projects,newProject]
//       }
//     })
//   }

//   const selectedProject=projectsState.projects.find(project=>project.id===projectsState.selectedProjectId);
//   let content=<SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;
//   if(projectsState.selectedProjectId===null){
//     content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
//   }else if(projectsState.selectedProjectId===undefined){
//     content=<NoProjectselected onStartAddProject={handleStartAddProject}/>
//   }
  
//   return (
//     <main className='h-screen my-8 flex gap-8'>
//      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
//       {content}
//     </main>
//   )
// }

// export default App

import { useState } from 'react'
import NewProject from './components/NewProject'
import NoProjectselected from './components/NoProjectselected'
import ProjectsSidebar from './components/ProjectsSidebar'
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  // ✅ ADD TASK (Correct Way)
  function handleAddTask(text) {
    setProjectsState(prevState => {
      const newTask = {
        id: Math.random().toString(),
        text: text,
        projectId: prevState.selectedProjectId
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  // ✅ DELETE TASK
  function handleDeleteTask(taskId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId)
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectId
        ),
        tasks: prevState.tasks.filter(
          task => task.projectId !== prevState.selectedProjectId
        )
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );

  // ✅ FILTER TASKS PER PROJECT
  const selectedTasks = projectsState.tasks.filter(
    task => task.projectId === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedTasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectselected
        onStartAddProject={handleStartAddProject}
      />
    );
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
