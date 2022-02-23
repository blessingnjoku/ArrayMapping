import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import kidsgame from '../src/assets/images/kidsgame.png'
import secondimg from '../src/assets/images/secondimg.png'


const ArrayData=[
  {
    id:1,
    displayImage:secondimg,
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  {
    id:2,
    displayImage:kidsgame,
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  {
    id:3,
    displayImage:kidsgame,
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  {
    id:4,
    displayImage:secondimg,
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },

  {
    id:5,
    displayImage:secondimg,
    category:"category",
    imageTag:"Open Group",
    title:"Sample Support Group Name Comes In Here ",
    buttonText1:"Join Group",
    buttonText2:"View Group",
     memeber:"25members"

  },
  {
    id:5,
    displayImage:kidsgame,
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
      <div className='image-box' style={{backgroundImage:`url(${val.displayImage})`}}>
        
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
