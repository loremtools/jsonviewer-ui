import React, { Component } from 'react';

import JSONEditorBox from './JSONEditorBox';
import './JsonViewerPanel.css';

class JsonViewerPanel extends Component {
  state = {
    json: {}
  };

  render() {
    return (
    <div className="contents">
        <JSONEditorBox
            json={this.state.json}
            onChangeJSON={this.onChangeJSON}
        />
    </div>
    );
  }

  onChangeJSON = (json) => {
    this.setState({ json });
  };
}

export default JsonViewerPanel;
