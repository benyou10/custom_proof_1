import React from 'react';
import '../index.css';

const Interface = (props) => {

const {setleftBurst,leftBurst,setrightBurst,rightBurst}=props
    const togglelright = () =>{
        setrightBurst(!rightBurst)
       }
       const toggleleft = () =>{
        setleftBurst(!leftBurst)
       }
  return (
    <div className="dir">
     
      <button onClick={toggleleft} className="button left">
        
        <div className="text">left</div>
      </button>
      <button onClick={togglelright} className="button ">
      <div className="text">right</div>

      
      </button>
    </div>
  );
};

export default Interface;
