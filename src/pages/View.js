import React,{useState,useEffect} from 'react'
import db from '../fire.js'
import {Link,useHistory,useParams} from 'react-router-dom'

const View = () => {
    const [user,setuser]=useState({})
    const {id}=useParams()
    const history=useHistory()
    useEffect(()=>{
        db.child(`contact/${id}`)
        .get()
        .then((snapshot)=>{
            if(snapshot.exists()){
                setuser({...snapshot.val()})
            }
            else{
                setuser({})
            }
        })

    },[id])
    console.log(user)
    return (
        <div >
         <div className="card">
             <div className="cardheader">
                 <p>user data</p>
             </div>
             <div className="container">
                 <div className="item">
                 <span>ID:</span>   {user.name}
                   
                      </div>
                      <div className="item">
                 <span>username</span>
                  {user.email}
                   
                      </div>

                      <div className="item">
                 <span>contact</span>   {user.contact}
                   
                      </div>
                      <div className="item">
              <Link to="/">  <button>go back</button>
                   </Link>
                      </div>


             </div>

         </div>
           

        </div>
    )
}

export default View
