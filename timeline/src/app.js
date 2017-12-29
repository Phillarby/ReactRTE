import React from 'react';
import Narrative from './components/Narrative';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Narrative Timeline Spike</h1>
                    <Narrative />
                </div>
            </MuiThemeProvider>
        );
    }
}