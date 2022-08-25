// import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect } from 'react';

function Promise_example(props) {
    const one = () => {
        return " hi "
    }
    // syncronaiz all disply exm
    // const two = () => {
    //     return "helo"
    // }
    // syncronaiz not wiat output disply wiat is undefinde
    // const two = () => {
    //     setTimeout(() => {
    //         return "helo"
    //     }, 2000);
    // }

    // async awiat resolve reject all disply but  settime out wiating to disply
    const two = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("hellokkkkkkk")
            }, 2000);
        })
        // return"hellllllllll"
    }
    const three = () => {
        return " by"
    }
    // const All = () => {
    //     const o = one()
    //     console.log(o);

    //     const t = two()
    //     console.log(t);

    //     const th = three ()
    //     console.log(th);
    // }


    // async and wiat

    const All = async () => {
        const o = one()
        console.log(o);

        const t = await two()
        console.log(t);

        const th = three()
        console.log(th);
    }
    useEffect(() => {
        All();
    },

        [])

    // collback function
    const display = (z) => {
        console.log(z);

    }

    const sum = (display) => {
        let x = 10,
            y = 15;
        let z;
        z = x + y
        display(z)

    }
    sum(display)

    return (
        <div>
            <p> am Promise</p>
        </div>
    );
}

export default Promise_example;