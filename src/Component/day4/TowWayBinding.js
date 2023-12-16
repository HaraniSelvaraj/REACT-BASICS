import React, { useState } from 'react'
export default function TowWayBinding()
{
    const[name,setName]=useState("")
    const changeName=(event)=>setName(event.target.value)
    return(
        <div>
            TwoWayBinding
            <input onChange={changeName} value={name}></input>
            <p>The Name is {name}</p>
        </div>
    )
}