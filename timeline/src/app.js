import React from 'react';
import HelloWorld from './components/HelloWorld';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>The React Seed Project</h1>
                    <HelloWorld />
                </div>
            </MuiThemeProvider>
        );
    }
}