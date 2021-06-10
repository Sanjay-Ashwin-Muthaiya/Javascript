import React from "react";
import Employee from './Employee'


class Count extends React.Component{
    constructor(props){
        super(props);
        this.state={
         count: 0
        };
    }
    handleIncrementCounts(){
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrementCounts(){
        this.setState({
            count: this.state.count -1
        })
    }
    render(){
        return (<div><h1>{this.state.count}</h1>
        <button onClick={this.handleIncrementCounts.bind(this)}>Increase count</button>
        <button onClick={this.handleDecrementCounts.bind(this)}>Decrease Count</button>
        <Employee  name="Sanjay Ashwin" designation="Software Developer" place="Rasipuram"/></div>)
    }
}

export default Count;
