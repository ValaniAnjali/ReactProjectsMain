import Button from "./Button";

export default function ProjectsSidebar({onStartAddProject,projects,onSelectProject,selectedProjectId}){
    return (
        <aside className="h-screen w-xs bg-cyan-700 m-2 p-3">
    <h2>Your Projects</h2>
    <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
    </div>
    <ul className="mt-8">
        {
            
            projects.map(project=>{
                let cssClasses="w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200";
                if(project.id===selectedProjectId){
                    cssClasses+= ' bg-stone-800 text-stone-200'
                }else{
                    cssClasses+=' text-stone-400'
                }
                return(
                    <li key={project.id}>
                <button className={cssClasses}
                        onClick={()=>onSelectProject(project.id)}>{project.title}</button>
            </li>
                )
            })
        }
    </ul>
    </aside>
    )
}