import React from 'react';
import Counter from './Counter';
import UseInput from './UseInput';
import UseTabs from './UseTabs';
import UseTitle from './UseTitle';

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

  return (
    <>
      <Counter />
      <input placeholder="Name" {...name} />
      <div>
        {content.map((section,index) => <button key={section.id} onClick={() => changeItem(index)}>{section.tab}</button> )}
      </div>
      {currentItem.content}
    </>
  );
}

export default App;
