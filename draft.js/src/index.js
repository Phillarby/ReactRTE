import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return <h1>The React Seed Project</h1>
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('app'));