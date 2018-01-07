import React from 'react';
import ReactDOM from 'react-dom';
import DraftEditor from './components/DraftEditor';
import ChipTiles from './components/Chips'
// import ReactChips from './components/ReactChips'
// import ChipReact from './components/ChipsReact'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './style.css'

class Root extends React.Component {
  render() {
    return (
    <div>
        <h1>Draft.JS rich text editor</h1>
        <div>
            <DraftEditor />
        </div>
        <div>
             <ChipTiles /> 
        </div>
    </div>
    )
  }
}

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}><Root/></MuiThemeProvider>, document.getElementById('app'));

