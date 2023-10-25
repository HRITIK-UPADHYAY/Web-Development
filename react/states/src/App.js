import React from 'react';
import "./style.css";
import StateBasic from './Components/StatesBasic';
import Counter from './Components/Counter';
import StatesWithObjects from './Components/StateWithObject';
import BasicForm from './Components/BasicFrom';
import StateWithArray from './Components/StateWithArray';
import Formvalidation from './Components/FormValidation';
import LazyIntialization from './Components/LazyIntialization';
import AsyncState from './Components/AsyncState';

const App = () => {
    return (
        <div>
            {/* <StateBasic /> */}
            {/* <Counter /> */}
            {/* <StatesWithObjects /> */}
            {/* <BasicForm /> */}
            {/* <StateWithArray /> */}
            {/* <Formvalidation /> */}
            {/* <LazyIntialization /> */}
            <AsyncState /> 
        </div>
    )
}

export default App;