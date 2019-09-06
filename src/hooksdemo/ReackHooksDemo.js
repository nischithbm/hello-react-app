import React, { useState, useEffect, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

const ReackHooksDemo = () => {
    const [firstName, setFirstName] = useState("Harry");
    const [lastName, setLastName] = useState("Potter");
    useEffect(() => {
        console.log("updating document title");
        document.title = `${firstName} ${lastName}`;
    }, [firstName, lastName]);
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        console.log("adding resize event listener");
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("removing resize event listener");
        }
    }, []);

    return (
        <Fragment>
            <h1>React Hooks Demo</h1>
            <div>
                <TextField name="firstName" label="First Name" value={firstName} onChange={handleFirstNameChange} />
                <TextField name="lastName" label="Fast Name" value={lastName} onChange={handleLastNameChange} />
            </div>
            <div>Width: {width}</div>
        </Fragment>
    );
};
export default ReackHooksDemo;