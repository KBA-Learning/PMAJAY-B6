import React from 'react'

const Demo = () => {
    const name = "Ram";
    const x=100;
    const y=200;
    const names = ['Ram','Rahul','Lekshmi','Mary'];
    const Passed = false;

  return (
    <>
    <div className='text-5xl'>Demo APP</div>
    <p>Hello {name} </p>
    <p>The {x} and {y} add to {x+y}</p>
    <ul>
        {names.map((name,index)=>(
            <li key={index}>{name}</li>
        ))}
    </ul>
    {Passed?<h1>You have passed!</h1>:<h1>You have failed!</h1>}
    </>
  )
}

export default Demo