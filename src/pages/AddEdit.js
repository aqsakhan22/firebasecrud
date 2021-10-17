import React,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import './Addedit.css'
import db from '../fire.js'
import { toast } from 'react-toastify';
const initializeState={
    name:"",
    email:"",
    contact:""
}

const AddEdit = () => {
  const[state,setState]=useState(initializeState);
  const [data,setdata]=useState({})
  const {name,email,contact}=state;
  const history=useHistory()
  const {id}=useParams();
  useEffect(()=>{
    db.child("contact").on("value",(snapshot)=>{
        if(snapshot.val() !== null){
            setdata({...snapshot.val()})

        }
        else{
            setdata({})

        }

    });

    return()=>{
        setdata({})
    }
   
       },[id]);


       useEffect(()=>{

        if(id){
            setState({...data[id]})
        }
        else{
            setState({initializeState})
        }
        return()=>{
            setState({initializeState})
        }

       },[id,data])
   
  const handleInputChange=(e)=>{
 const {name,value}=e.target;
 setState({...state,[name]:value})
   
      
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
   console.log("done")
      if(!name && !email && !contact){
          toast.error("please fill all values")
      }

      if(!id){
        db.child("contact").push(state,(err)=>
          
        {
            if(err){
                toast.error("something gone wrong")
            }
            else{
                toast.success("stored successfully")
                
            }
        }
       
)
      }
     else{
       db.child(`contact/${id}`).set(state,(err)=>
          
                     {
                         if(err){
                             toast.error("something gone wrong")
                         }
                         else{
                             toast.success("update successfully")
                             
                         }
                     }
                    
          )
      }

      setTimeout(()=>history.push("/"),500)
  }
    return (
        <div className="updateform">
     <form onSubmit={handleSubmit}>
       <div className="item">
       <label>name</label>
         <input type="text" placeholder="name"
         
         name="name"
         value={name || ""}
         onChange={handleInputChange}
         />
       </div>
        <div className="item">
        <label>email</label>
         <input type="email" placeholder="email"
         
         name="email"
         value={email || ""}
         onChange={handleInputChange}

         />
        </div>
        <div className="item">
        <label>contact</label>
         <input type="number" placeholder="contact"
         
         name="contact"
         value={contact || ""}
         onChange={handleInputChange}
         
         />
        </div>
 <input className={id ? "btnupdate" :"btnsave"}  type="submit" value={id ? "Update" : "send"}/>
     </form>
   
        </div>
    )
}

export default AddEdit;
