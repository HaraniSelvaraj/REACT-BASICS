export default function Key()
{
    const college=[
        {id :1, name:"shree",age:19},
        {id :2, name:"Harani",age:18}
    ]
    const display=college.map((col)=><li key={col.id}>{col.id}={col.name}={col.age}</li>)
    return(
        <div style={{backgroundColor:"pink"}}>
            <h1 style={{color:"purple"}}>List of Students</h1>
            {display}

        </div>

    )
    

}