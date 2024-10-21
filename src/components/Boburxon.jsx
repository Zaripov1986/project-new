
import React from 'react'
import { useNavigate } from 'react-router-dom'

const StudentComponent = () => {
 let navigate = useNavigate();
// function handleBack (){
//  navigate(-1);
//  
//}
const handleBack = () =>{
  navigate(-1);
  
};
  return (
    <div>
      <button onClick={handleBack}>Back</button>
      StudentComponent</div>
  )
}

export default StudentComponent