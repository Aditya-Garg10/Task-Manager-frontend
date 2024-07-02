import React,{useContext} from 'react'
import { notecontext } from "../App";

const Noteitem = (props) => {
  const name2 = useContext(notecontext);
  const {deleteNote} = name2;
    const {note,updateNote} = props;
  return (
    <div className='col-md-4 my-2' >
      
      <div className="card" >
  <div className="card-body ">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i style={{cursor:"pointer"}} className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
    <i style={{cursor:"pointer"}} className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
    <span style={{zIndex:"1",marginLeft:"250px"}} class={`position-absolute top-0 translate-middle badge rounded-pill bg-${note.tag==="Pending"||note.tag==="pending"?"danger":"primary"}`}>
    {note.tag}
    <span class="visually-hidden">unread messages</span>
  </span>
  </div>
</div>
      </div>
    
  )
}

export default Noteitem
