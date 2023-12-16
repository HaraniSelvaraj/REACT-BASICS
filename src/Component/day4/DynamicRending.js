import React,{useState} from 'react'
export default function DynamicRending()
{
    const [x,setx]=useState(12)
    return(
        x>10 ? <h1>The value is greater than 10</h1>:
        <h1>The  vale is less than 10</h1>
    )
}