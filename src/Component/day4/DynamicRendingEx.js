import React,{useState} from 'react'
const isLoggedIn = true;
export default function DynamicRendingEx()
{
    if(isLoggedIn)
    {
        return<p>Welcom Back!</p>;
    }
    else{
        return <p>Please log in</p>;
    }
}