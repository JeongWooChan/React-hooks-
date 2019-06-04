import React, { useState } from 'react';

const UseInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target: { value }
        } = event; 
        let willUpdate = true;
        if(typeof validator === "function") {
            willUpdate = validator(value);
        }
        if(willUpdate) {
            setValue(value);
        }

    }
    return { value, onChange };
};

export default UseInput;