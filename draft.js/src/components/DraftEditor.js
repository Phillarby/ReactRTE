import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css'

export default class DraftEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }

    onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    onShowStateClick() {
        console.log(this.state.editorState);
    }

    render() {
        return (
            <div id='content'>
                <h1>Draft.js Editor</h1>
                <button onClick={this.onBoldClick.bind(this)}>Bold</button>
                <div className='editor'>
                  <Editor
                      editorState={this.state.editorState}
                      onChange={this.onChange}
                  />
                </div>
                <button onClick={this.onShowStateClick.bind(this)}>Log Editor State</button>
            </div>
        );
    }
}

