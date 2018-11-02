import React, { Component } from 'react';
import './App.css';

// You can split your components
import Editor from './Editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Feel free to delete the header */}
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload. (Delete me if you like!)
          </p>
        </header>
        <Editor />
      </div>
    );
  }
}

export default App;
