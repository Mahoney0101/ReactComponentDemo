import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Demo } from './components/Demo';
import ClockWithHooks from './components/Clock';
import DemoFunctional from './components/DemoFunctional';
import './custom.css'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.setValue = this.setValue.bind(this);

        this.state = {
            value: 0
        }
    }

    setValue(state) {
        this.setState({value: state});
    }

  render () {
    return (
      <Layout>
        <Route exact path='/' render={() =>
            <Demo
                parentValue={this.state.value}
                setParentValue={this.setValue}
            />}
            />
            <Route path='/demo-functional' render={() =>
                <DemoFunctional
                    parentValue={this.state.value}
                    setParentValue={this.setValue}
                />}
            />
            <Route path='/clock' component={ClockWithHooks}/>
      </Layout>
    );
  }
}
