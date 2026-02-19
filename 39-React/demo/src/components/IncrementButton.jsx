import React, { useState, useEffect } from 'react'

const IncrementButton = ({startNumber, incrementNumber=1}) => {

    const [count, setCount] = useState(startNumber)
    const [heading,setHeading] = useState("Hello World!");

    useEffect(()=>{
        console.log('UseEffect is called!', 'count is:', count)
    }, [count])
  return (
    <button onClick={() => {setCount((count) => count + incrementNumber)
        setHeading("New Heading!")
    }
    }>
        count is {count}
        heading is {heading}
    </button>
  )
}

export default IncrementButton