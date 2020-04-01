import React, { Component } from 'react';

export class Demo extends Component {

  constructor(props) {
      super(props);
      this.getNumber = this.getNumber.bind(this);
      this.state = { currentValue: this.props.parentValue };
    }

    getNumber() {
        return document.getElementById("numberInput").value;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.parentValue !== prevState.currentValue) {
            return { currentValue: nextProps.parentValue };
        }
        else return null;
    }

  render() {
    return (
      <div>
        <h1>Demo using class components</h1>

            <p>This is a simple example of a React component that displays a state that it is passed via props from a parent component.<br/>
                <ul><li>This component can change the state of the prop in the parent which has a rolldown effect and chages that prop this component.</li>
                    <li>The method that listens for the props to change is called <b>getDerivedStateFromProps</b> (this is a static method that listens and if a prop value changes it will run the code inside.)</li>
                    <li>This method runs once the component mounts and everytime a specific prop changes.</li>
                    <li>The code inside will update the state on this page with the new props</li>
                    <li>React will always update once a state changes and will only update what has changed(You can see this in chrome with f12 and view Elements)</li>
                </ul>
            </p>
            <p aria-live="polite">Current value from parent state: <strong>{this.state.currentValue}</strong></p>

            <input id="numberInput" type="number" placeholder="Change me" defaultValue="1"></input>
            <br />
            <ChangeButton setParentValue={this.props.setParentValue} getNumber={this.getNumber}>Change</ChangeButton>
      </div>
    );
  }
}
class ChangeButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={() => { this.props.setParentValue(this.props.getNumber()) }}>Change</button>
            )
    }
}

