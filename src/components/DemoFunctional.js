import React, { useState, useEffect } from 'react';

const DemoFunctional = (props) => {

    const[currentValue, setCurrentValue] = useState(props.parentValue);

    const getNumber = () =>{
        return document.getElementById("numberInput").value;
    }

    useEffect(() => setCurrentValue(props.parentValue), [props.parentValue]);

    const ChangeButton = (props) => {
        return (
        <button className="btn btn-primary" onClick={() => { props.setParentValue(getNumber()) }}>Change</button>
        )
    }

        return (
            <div>
                <h1>Demo using functional components</h1>

                <p>This is a simple example of a React component that displays a state that it is passed via props from a parent component.<br />
                    <ul><li>This component can change the state of the prop in the parent which has a rolldown effect and chages that prop this component.</li>
                        <li>The hook that listens for the props to change is called <b>useEffect</b></li>
                        <li>This hook<b>*</b> runs once the component mounts and everytime a specific prop changes.</li>
                        <li>The code inside will update the state on this page with the new props</li>
                        <li>React will always update once a state changes and will only update what has changed(You can see this in chrome with f12 and view Elements)</li>
                    </ul>
                    <b>*</b>React Hooks are functions that let us hook into the React state and lifecycle features from function components.

                </p>

                <p aria-live="polite">Current value from parent state: <strong>{currentValue}</strong></p>

                <input id="numberInput" type="number" placeholder="Change me" defaultValue="1"></input>
                <br />
                <ChangeButton setParentValue={props.setParentValue}>Change</ChangeButton>
            </div>
        );
}
export default DemoFunctional;