import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const itemDivStyle = {
    float: 'left',
    backgroundColor: '#eeeeee',
    border: '1px solid #cccccc',
    padding: '5px'
};

const contentDivStyle = {
    backgroundColor: '#cccccc',
    border: '1px solid #222222',
    padding: '5px'
}

const checkboxDivStyle = {
    float: 'left',
    width: '30px'
}

const containerDivStyle = {
    overflow: 'hidden',
    margin: '5px'
}

export default class CustomTimelineEvent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: `title for narrative item ${this.props.number}`
        }
    }

    render() {
        return (
            <div style={containerDivStyle}>
                <div style={checkboxDivStyle}>
                    <Checkbox />
                </div>
                <div style={itemDivStyle}>
                    <h1>{this.state.title}</h1>
                    <div style={contentDivStyle}>
                        <p>This is number {this.props.number}</p>
                        <p>This is a component so can be set up to render any information in any way</p>
                    </div>
                </div>
            </div>
        );
    }

}







