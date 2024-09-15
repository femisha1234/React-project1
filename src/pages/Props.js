import React, { useState } from 'react'

function Props(data) {
  console.log(data.age)
  // const [name,setName]=useState('')
  // const [place,setPlace]=useState('')
  // const [age,setAge]=useState(data.age)
  const [number, setNumber] = useState(0)


  return (
    <>
      <div>Props</div>
      {/* <h1>{name}</h1>
    <h1>{place}</h1>
    <h1>{age}</h1>  */}
      <h1>{number}</h1>

      {/* <button onClick={()=> { setName('Femisha'); setPlace('Tirur')}}>Click me</button> */}
      <button onClick={() => { setNumber(number => number+1) }}>Click me</button>
      <button onClick={()  =>   { setNumber(number => number-1)}}>Click me</button>



      
    </>
      )
}

export default Props