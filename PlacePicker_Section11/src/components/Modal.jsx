import {  useRef,useEffect } from 'react';
import { createPortal } from 'react-dom';
function Modal({ open,children }) {
  const dialog = useRef();

  console.log('Timer set here')
    useEffect(()=>{
        if(open){
            dialog.current.showModal();
        }else{
            dialog.current.close();
        }
    },[open])

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open?children:null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;

// if we writes open and close code outside than initialy between ref and input element coneection isnt established so it is undefined so it will show error and can't access close field.
// so better use in useeffect so after rendering this it will execute

// effect dependencies - props values used inside useEffect function