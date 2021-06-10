import React from 'react';


class Employee extends React.Component {
    render() {
        return (<div><h1>Welcome {this.props.name} and you are a {this.props.designation}</h1>
            <h2>from {this.props.place}</h2></div>)
    }
}

export default Employee;