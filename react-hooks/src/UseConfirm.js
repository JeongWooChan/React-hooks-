import { useConfirm } from 'react';

const UseConfirm = (message = "", callback, cancel) => {
    const confirmAction = () => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm(message)) {
            callback();
        } else {
            cancel();
        }
    }
    return confirmAction;
};

export default UseConfirm;