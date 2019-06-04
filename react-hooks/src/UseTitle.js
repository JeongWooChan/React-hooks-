import React, { useEffect, useState } from 'react';

const UseTitle =initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title"); 
        htmlTitle.innerText = title 
        console.log(htmlTitle);
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

export default UseTitle;