import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemoexampal(props) {
     const [number, setnumber]= useState(0);
     const [Counter, setcounter] = useState(0);

const  findfectorial =(n) =>{
    console.log("findfectorial coll");
    if( n >1){
         return n * findfectorial(n-1)
    }else{
        return 1
    }
}  
//  const  result= findfectorial(number)
 const result =useMemo(()=>{
    return findfectorial(number)
 },
[number] )
    return (
        <div>
            <input type="text"  placeholder="enter a number" onChange={(e)=> setnumber(e.target.value)}/>
            <button  onClick={(e)=> setcounter(Counter+1)}>click</button>
            <p>Counter value:{ Counter}</p>
            <p> findfectorial value: {result}</p>
            
        </div>
    );
}

export default UseMemoexampal;