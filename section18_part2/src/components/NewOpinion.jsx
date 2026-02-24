import { use, useActionState } from "react";
import { OpinionsContext } from '../store/opinions-context'
import Submit from "./Submit";
export function NewOpinion() {
    const {addOpinion}=use(OpinionsContext);
   async function shareOpinionAction(prevState,formData){ 
        let name=formData.get('userName');
        let title=formData.get('title');
        let body=formData.get('body');
        console.log(name+" "+title+" "+body);
        let errors=[];
        if(title.trim().length<5){
          errors.unshift('Title should be atleast of length 5')
        }
        if(body.trim().length<10||body.trim().length>300){
            errors.unshift('opinion must be 10 to 300 characters long');
        }
        if(name.trim()===''){
            errors.unshift('name is required');
        }
         if (errors.length > 0) {
      return { errors, enteredValues:{
        title,
        body,
        name
      }};
    }

      //submit to backend
      await addOpinion({title,body,userName:name});
      return {errors:null};


    
    }
    const [formState,formAction]=useActionState(shareOpinionAction,{
        errors:null
    });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.name}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>

        {
          formState?.errors && <ul className="errors">
            {formState.errors.map((error)=>(
              <li key={error}>{error}</li>
            ))}
          </ul>
        }
        <Submit/>
       
      </form>
    </div>
  );
}
