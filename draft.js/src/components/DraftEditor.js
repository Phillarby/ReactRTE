import React from 'react';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import '../../node_modules/draft-js/dist/Draft.css';
import content from './DraftEditorContent';

export default class DraftEditor extends React.Component {


    constructor(props) {
        super(props);
        console.log({content: content});
        this.state = {editorState: EditorState.createWithContent(content)};
        this.onChange = (editorState) => this.setState({editorState});
    }

    /**
     * Define bespoke formatting styles to allow injection if CSS classes at
     * render time
     */
    myBlockStyleFn(contentBlock) {
        const type = contentBlock.getType();

        if (type === 'blockquote') {
            return 'superFancyBlockquote';
        }
        if (type === 'unstyled') {
            return 'plainbortingoldtext';
        }
    }

    onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    onUnderlineClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }


    onBulletClick() {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item'));
    }

    onShowStateClick() {
        console.log(this.state.editorState);
    }

    onShowStateContentClick() {
        console.log(convertToRaw(this.state.editorState.getCurrentContent()));
    }

    onShowHTMLContentClick() {
        console.log(stateToHTML(this.state.editorState.getCurrentContent()));
    }

    /**
     * This provides out-of-the-box keyboard shortcuts
     * @param command
     * @param editorState
     * @returns {string}
     */
    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    render() {
        return (
            <div id='content'>
                <button onClick={this.onBoldClick.bind(this)}>Bold</button>
                <button onClick={this.onUnderlineClick.bind(this)}>Underline</button>
                <button onClick={this.onItalicClick.bind(this)}>Italic</button>
                <button onClick={this.onBulletClick.bind(this)}>Bullets</button>
                <div className='editor'>
                  <Editor
                      handleKeyCommand={this.handleKeyCommand.bind(this)}
                      editorState={this.state.editorState}
                      onChange={this.onChange}
                      blockStyleFn={this.myBlockStyleFn}
                      spellCheck={true}
                  />
                </div>
                <button onClick={this.onShowStateClick.bind(this)}>Log Editor State</button>
                <button onClick={this.onShowStateContentClick.bind(this)}>Log Editor Content</button>
                <button onClick={this.onShowHTMLContentClick.bind(this)}>Log HTML Content</button>
            </div>
        );
    }
}

