import React, { useState } from 'react'
import "./home.css"
import { Link } from 'react-router-dom';

const HomeComponent = () => {
    const[count,setCount] = useState(0);
    const[text,setText] = useState('farrux');
    const [aktive,setActive] = useState('true');
     function increament(){
        setCount(count +1);
     
     }
  
function decreament(){
   if(count >0){
    setCount(count -1);
   }
    
}

const handleChange = (e) =>{
 setText(e.target.value);
};
function handleStudent(){
    setActive(true);
    console.log(true);
    
}
function handleProfessor(){
    setActive(false);
}
  return (
    <div>
          
         <div>
            <p>Count:{count}</p>
            <button onClick={increament}>+</button>
            <button onClick={decreament}>-</button>
         </div>
         <div>
            <input type="text" onChange={handleChange} />
            <p>{text}</p>
         </div>
         <div>
            <button onClick={handleStudent}>Student</button>
            <button onClick={handleProfessor}>Professor</button>

            {
                aktive
                ?
               <table>
                <tr>
                    <Link to={'/student'}>
                    <td>
                        Boburxon
                    </td>
                    </Link>
                </tr>
                <tr>
                    <td>
                        Rahmatulla
                    </td>
                </tr>
                <tr>
                    <td>
                        Abdulboriy
                    </td>
                </tr>
                <tr>
                    <td>
                        Farrux
                    </td>
                </tr>
               </table>
               :
               <table>
                <tr>
                    <td>
                        Alisher
                    </td>
                </tr>
                <tr>
                    <td>
                        Yaxyoxon
                    </td>
                </tr>
               </table>
            }
         </div>

    </div>
  )
}

export default HomeComponent