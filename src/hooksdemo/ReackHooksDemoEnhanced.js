import React, { useState, useEffect, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        console.log("useWindowWidth: adding resize event listener");
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("useWindowWidth: removing resize event listener");
        }
    }, []);
    return width;
};

const useFieldEffect = (initialFieldValue) => {
    const [fieldValue, setFieldValue] = useState(initialFieldValue);
    const handleFieldChange = (event) => {
        setFieldValue(event.target.value);
    };
    return [fieldValue, handleFieldChange];
};

const ReackHooksDemo = () => {
    const [firstName, handleFirstNameChange] = useState("Harry");
    const [lastName, handleLastNameChange] = useState("Potter");
    const width = useWindowWidth();

    useEffect(() => {
        console.log("updating document title");
        document.title = `${firstName} ${lastName}`;
    }, [firstName, lastName]);
    
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