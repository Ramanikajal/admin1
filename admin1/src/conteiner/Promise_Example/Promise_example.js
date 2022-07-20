import React, { useState, useEffect } from 'react';

function Promise_example(props) {
    const one = () => {
        return "one i am"
    }
    const two = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve ("two i am")
            }, 2000);
        })
      

    }
    const three = () => {
        return "therr i am"
    }
    const All =async () => {
        const o = one()
        console.log(o);

        const t =await two()
        console.log(t);

        const th = three()
        console.log(th);
    }
    
useEffect(() => {
All();
},
[]);

const display=(z)=>{
    console.log(z);
}
const sum=(display)=>{
   let x=10, y=5;
   let z;
   z=x+y;
   display(z)

}
sum(display)
    return (
        <div>
            
        </div>
    );
}

export default Promise_example;