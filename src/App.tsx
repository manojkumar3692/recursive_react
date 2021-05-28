import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';

import {FileNode, root} from './component/data'

const File:React.FC<FileNode> = ({id, children}: FileNode) =>  {

  const [showChildren, setShowChildren] = useState(false)

  const handleClick = () => {
    setShowChildren(!showChildren)
  }
    return (
      <div>
      <span onClick={handleClick}>
        <h4 style={{ fontWeight: showChildren ? 'bold' : 'normal' }}>{id}</h4>
      </span>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', left: 25, borderLeft: '1px solid', paddingLeft: 15 }}>
        {showChildren && (children ?? []).map((node: FileNode) => <File {...node}/>)}
      </div>
    </div>
    )
}

function App() {
  return (
    <div className="App" style={{ marginLeft: 15 }}>
          <File {...root}/>
    </div>
  );
}

export default App;
