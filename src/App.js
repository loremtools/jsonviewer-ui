import React, { Component } from 'react';

import JSONEditorBox from './JSONEditorBox';
import './App.css';

class App extends Component {
  state = {
    json: {}
  };

  render() {
    return (
      <div className="app">
        <div className="contents">
          <JSONEditorBox
              json={this.state.json}
              onChangeJSON={this.onChangeJSON}
          />
        </div>
      </div>
    );
  }

  onChangeJSON = (json) => {
    this.setState({ json });
  };
}

export default App;
