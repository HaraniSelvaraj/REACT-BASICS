export default function List()
{
    const animals=["dog","cat","lion","tiger"]
    const result=animals.map((ani,index)=><li Key={index}>{index}={ani}</li>)
    return(
        <div style={{backgroundColor:"bisque"}}>
            <ul type="none">
                {result}
            </ul>

        </div>
    )
}