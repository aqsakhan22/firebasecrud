import React,{useState,useEffect} from 'react'
import db from '../fire.js'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './home.css'


const Home = () => {
    const [data ,setdata]=useState({})
    useEffect(()=>{
 db.child("contact").on("value",(snapshot)=>{
     if(snapshot !== null){
         setdata({...snapshot.val()})
     }
     else{
         setdata({})
     }

 });
 return()=>{
     setdata({})
 }

    },[]);

    const deletedata=(id)=>{

        if(window.confirm("Are You want delete the dats")){
            db.child(`contact/${id}`).remove((err)=>{
                if(err){
                    toast.error();
                }
                else{
                    toast.success("contact deleted")
                }
            })
        }

    }


    
   
    return (
        <div className="home">
          <table className="styles-table">
              <thead>
                  <tr>

                      <th style={{textAlign:"center"}}>No</th>
                      <th style={{textAlign:"center"}}>Name</th>
                       <th style={{textAlign:"center"}}>Email</th>
                      <th style={{textAlign:"center"}}>Contact</th>
                      <th style={{textAlign:"center"}}>Action</th>
                  </tr>
              </thead>

              <tbody>
                  {Object.keys(data).map((id,index)=>{
                      return(
                          <tr key={id}>
                              <th scope="row">{index + 1}</th>
                              <td>{data[id].name}</td>
                              <td>{data[id].email}</td>
                              <td>{data[id].contact}</td>
                          
                            <td>
                                <Link to={`/update/${id}`}>
                   <button className="btn btn-edit">Edit</button>

                                </Link>
                                
                   <button className="btn btn-del" onClick={()=>deletedata(id)}>Delete</button>
                   
                               
                                <Link to={`/view/${id}`}>
                   <button className="btn btn-view">View</button>
                   
                                </Link>
                            </td>
                          </tr>
                      )
                      
                  }
                  )
                }
              </tbody>
          </table>
        </div>
    )
}

export default Home
