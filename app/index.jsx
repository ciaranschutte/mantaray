import React from 'react';
import ReactDOM from 'react-dom';

import Markdown from './components/markdown.jsx';

const App = ({}) => {
  
    return(
      <Markdown/>
    )
  
}

ReactDOM.render(<App/>, document.getElementById('app'));