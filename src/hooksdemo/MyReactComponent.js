import React, { useState, useEffect, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

class MyReactComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "Harry",
            lastName: "Potter",
            width: window.innerWidth
        };
    }

    componentDidMount() {
        document.title = `${this.state.firstName} ${this.state.lastName}`;

        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        if (prevState.firstName !== this.state.firstName || 
            prevState.lastName !== this.state.lastName
        ) {
            console.log("componentDidUpdate - updating title");
            document.title = `${this.state.firstName} ${this.state.lastName}`;
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        });
    };
    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        });
    };

    render() {
        const {firstName, lastName, width} = this.state;
        return (
            <Fragment>
                <h1>React Component Demo</h1>
                <div>
                    <TextField name="firstName" label="First Name" value={firstName} onChange={this.handleFirstNameChange} />
                    <TextField name="lastName" label="Fast Name" value={lastName} onChange={this.handleLastNameChange} />
                </div>
                <div>Width: {width}</div>
            </Fragment>
        );
    }
}
export default MyReactComponent;