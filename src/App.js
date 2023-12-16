/*import ClassComponent from "./Component/ClassComponent.js";
import FunctionCom from "./Component/FunctionCom.js";
import OneExport from "./Component/OneExport.js";
import ArrowFunction from "./Component/ArrowFunction.js";
export default function App(){
    return(
        <div>
            <FunctionCom/>
            <ClassComponent/>
            <OneExport/>
            <ArrowFunction/>
        </div>
    )
}/*
/*import PropsArrowFunctionExample from "./day4/PropsArrowFunctionExample.js";
import PropsClass from "./day4/PropsClass.js";
import PropsFunction from "./day4/PropsFunction.js";
import PropsFunctionEx from "./day4/PropsFunctionEx.js";
import StateClassCom from "./day4/StateClassCom.js";
import StateFunctionCom from "./day4/StateFunctionCom.js";
import StateHoldObject from "./day4/StateHoldObject.js";
import Parent from "./day4/ParentChildComunication.js"
import DynamicRending from "./day4/DynamicRending.js";
import TowWayBinding from "./day4/TowWayBinding.js";
import DefaultProps from "./day4/DefaultProps.js";
import DynamicRendingEx from "./day4/DynamicRendingEx.js";

export default function App()
{
    return(
        <div>
            <PropsFunction name="sachine"/> 
           <PropsClass college= "SKCT"/>
           <PropsFunctionEx hob1="Sleeping" and hob2="Drawing"></PropsFunctionEx>
           <PropsArrowFunctionExample color="pink"></PropsArrowFunctionExample>
           <StateClassCom></StateClassCom>
           <StateFunctionCom></StateFunctionCom>
           <StateHoldObject></StateHoldObject>
           <Parent></Parent>
           <DynamicRending></DynamicRending>
         <TowWayBinding></TowWayBinding>
      <DefaultProps></DefaultProps>
      <DynamicRendingEx></DynamicRendingEx>

        </div>
    )
}*/
/*import React from 'react';
import './component/App.js';
import { Route,Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;*/

import { ErrorOutlineSharp } from "@mui/icons-material";
import ErrorBoundary from "./Component/day5/ErrorBoundary";


/*import { Icon } from "@mui/material"
import BasicButtons from "./Component/day4/Demo"
import Key from "./Component/day4/Key"
import List from "./Component/day4/List"
export default function App()
{
  return(
    <div>
      <List></List>
      <Key></Key>

      <br></br>
      <BasicButtons></BasicButtons>
      <br></br>
      <Icon></Icon>
    </div>
  )
}*/
/*import React from 'react';
import './assets/css/App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero'
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
    </div>
  );
}
export default App;*/

import React from 'react'
import ComponentLifeCycle from "./Component/day5/ComponentLifeCycle";
import LifeCycleFunction from "./Component/day5/LifeCycleFunction";
import TryCatch from "./Component/day5/TryCatch";
export default function App() {
  return (
    <div>
      <TryCatch fruit="Onion"></TryCatch>
    <ComponentLifeCycle></ComponentLifeCycle>
    <LifeCycleFunction></LifeCycleFunction>
    </div>
  )
}