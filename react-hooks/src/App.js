import React, { useRef } from 'react';
import Counter from './Counter';
import UseInput from './UseInput';
import UseTabs from './UseTabs';
import UseTitle from './UseTitle';
import UseClick from './UseClick';
import UseConfirm from './UseConfirm';
import UsePreventLeave from './UsePreventLeave';

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

  return (
    <>
      <Counter />
      <input placeholder="Name" {...name} />
      <div>
        {content.map((section,index) => <button key={section.id} onClick={() => changeItem(index)}>{section.tab}</button> )}
      </div>
      {currentItem.content}
      <h1 ref={title}>HI</h1>
      <button onClick={confirmDelete}>Delete the world</button>
      <div>
        <h3>usePreventLeave</h3>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>UnProtect</button>
      </div>
    </>
  );
}

export default App;
