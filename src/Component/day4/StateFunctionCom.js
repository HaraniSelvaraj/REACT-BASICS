import {useState} from 'react'
export default function StateFunctionCom()
{
    const[carName,setCarName]=useState("Thar");
    const changecarName=()=>setCarName("BMW")

    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)

    return(
        <div>
            <h1>My car name is{carName}</h1>
            <button onClick={changecarName}>Click me</button>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>increment</button>
            <button onClick={decrCount}>decrCount</button>
        </div>
    )
}