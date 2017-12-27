import React from 'react';
import ReactDOM from 'react-dom';
import DraftEditor from './components/DraftEditor'

class Root extends React.Component {
  render() {
    return (
    <div>
        <h1>Draft.JS rich text editor</h1>
        <div>
            <DraftEditor />
        </div>
    </div>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('app'));