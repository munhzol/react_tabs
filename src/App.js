import React, { useState } from 'react';
import './App.css';

function App() {

  const [tabs, setTabs] = useState([
      { id:1, title:'tab1', content:'tab1 content will appear here 1111'},
      { id:2, title:'tab2', content:'tab2 content will appear here 22'},
      { id:3, title:'tab3', content:'tab3 content will appear here 3'},
      { id:4, title:'tab4', content:'tab4 content will appear here '},
  ]);

  const [seldTab, setSeldTab] = useState(0);

  const selectTab = (e,id) => {
    setSeldTab(id);
    
  }

  return (
    <div className="App">
      {
        tabs.map((tab,i) => 
          <div onClick={e=>selectTab(e,i)} id={i} className={ seldTab===i?'tabTitle seld':'tabTitle' } key={i}>
            {tab.title}
          </div>
        )
      }
      <div className="tabContent">
        {tabs[seldTab].content}
      </div>
    </div>
  );
}

export default App;
