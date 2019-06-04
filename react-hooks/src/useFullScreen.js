import {useRef} from 'react';

const useFullScreen = () => {
    const element = useRef();
    const triggerFullScreen = () => {
        if(element.current) {
            element.current.requestFullscreen();
        }
    }
    const exitFullScreen = () => {
        document.exitFullscreen();
    }
    return {element, triggerFullScreen, exitFullScreen };
};

export default useFullScreen;