export const incrementAsync=()=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch({type:'INCREMENT'});
        },2000);//simulated delay of 1 second
    };
};