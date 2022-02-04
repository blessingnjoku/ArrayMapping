import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArrayData=[
  {
    id:1,
    // Image:require(../),
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  {
    id:2,
    // Image:require(../),
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  {
    id:3,
    // Image:require(../),
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  {
    id:4,
    // Image:require(../),
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },

  {
    id:5,
    // Image:require(../),
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  {
    id:5,
    // Image:require(../),
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  
]


const App= ()=> {
  return (
   
<div className='container'>
<div className='row'>
 { ArrayData.map((val,key)=>{
return(
  <div className='col-md-4' key={key}>
    <div className='Box'>
      <div className='image-box'>
        <image src="" />
      <button className='image-btn '>{val.imageTag}</button>
      </div>
      <div className='Content-box'>
        <div> <a href='#'>{val.category}</a><span style={{float:'right'}}>{val.memeber}</span></div>
       
        <h4>{val.title}</h4>
        <button className='me-2 btn1'>{val.buttonText1}</button><button className='btn2' >{val.buttonText2}</button>
      </div>

    </div>

  </div>
)

 })}

</div>
</div>  
  );
}

export default App;
