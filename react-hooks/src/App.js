import React from 'react';
import Counter from './Counter';
import UseInput from './UseInput';
import UseTabs from './UseTabs';
import UseTitle from './UseTitle';
import UseClick from './UseClick';
import UseConfirm from './UseConfirm';
import UsePreventLeave from './UsePreventLeave';
import UseFadeIn from './UseFadeIn';
import useNetwork from './useNetwork';
import useScroll from './useScroll';
import useFullScreen from './useFullScreen';

const content = [
  {
    id: 1,
    tab: "Section 1", 
    content: "I'm the content of the Section 1"
  },
  {
    id: 2,
    tab: "Section 2", 
    content: "I'm the content of the Section 2"
  }
]

function App() {
  const validate = value => (
    value.length <= 10 && !value.includes("@")
  );
  const name = UseInput("Mr.", validate);
  const {currentItem, changeItem} = UseTabs(0, content);
  const titleUpdater = UseTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 5000);
  const sayHello = () => console.log("sayHello");
  const title = UseClick(sayHello);
  const deleteWorld = () => console.log("deleting the world");
  const cancelWorld = () => console.log("cancel");
  const confirmDelete = UseConfirm("Are you sure", deleteWorld, cancelWorld);
  const {enablePrevent, disablePrevent } = UsePreventLeave(); 
  const fadeIn = UseFadeIn(2, 2);
  const fadeIn2 = UseFadeIn(5, 5);
  const handleNetworkChange = (online) => {
    console.log(online?"we just went online" : "we are offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  const { y } = useScroll();
  const {element, triggerFullScreen, exitFullScreen} = useFullScreen();

  return (
    <div style={{ height: "1000vh"}}>
      <div>
        <h3>1.useState</h3>
        <Counter />
        <input placeholder="Name" {...name} />
        <span>10글자 & "@" 포함 x</span>
      </div>
      <div>
        <h3>2. useTab </h3>
        {content.map((section,index) => <button key={section.id} onClick={() => changeItem(index)}>{section.tab}</button> )}
        <div>
          {currentItem.content}
        </div>
      </div>
      <div>
        <h3>3. useClick</h3>
        <button ref={title}>버튼을 클릭한 후 console 확인</button>
      </div>
      <div>
        <h3>4. useConfirm</h3>
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
      <div>
        <h3>5. usePreventLeave</h3>
        <p>Protect를 누른 후 새로고침</p>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>UnProtect</button>
      </div>
      <div>
        <h3>6. useFadeIn</h3>
        <h4 {...fadeIn} >useFadeIn</h4>
        <p {...fadeIn2}>lalala</p>
      </div>
      <div>
        <h3>7. useNetwork</h3>
        <h4>{onLine ? "Online" : "Offline"}</h4>
      </div>
      <div>
        <h3>8. useScroll</h3>
        <h4 style={ {color: y > 100 ? "red" : "blue"} }>Hi</h4>
      </div>
      <div>
        <h3>useFullScreen</h3>
        {/* <div ref={element}>
          <button onClick= {exitFullScreen}>Exit fullScreen</button>
        </div> */}
        <img ref={element} src="https://t1.daumcdn.net/cfile/tistory/9994813D5C7A96FA20" width="600px" alt="img"/>
        <button onClick={triggerFullScreen} style={{display:"block"}}>Make FullScreen</button>
      </div>
    </div>
  );
}

export default App;
