import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import '../../node_modules/draft-js/dist/Draft.css';
import content from './DraftEditorContent';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import { blue300, indigo900 } from 'material-ui/styles/colors';
import ChipInput from 'material-ui-chip-input'

export default class Chips extends React.Component {
    constructor(props) {
        super(props);
    //    state and style for pure material ui method:
        this.state = {
            chipData: [
                { key: 0, label: 'Angular' },
                { key: 1, label: 'JQuery' },
                { key: 2, label: 'Polymer' },
                { key: 3, label: 'ReactJS' },
            ],
        };
        this.styles = {
            chip: {
                 margin: 4,
            },
            wrapper: {
                 display: 'flex',
                 flexWrap: 'wrap',
            },
        };
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleRequestDelete = this.handleRequestDelete.bind(this);

    }

    // handleRequestDelete(chip, index) {

    //     this.chipData = this.state.chipData;
    //     const chipToDelete = this.chipData.map((chip) => chip.index).indexOf(index);
    //     this.chipData.splice(chipToDelete, 1);
    //     this.setState({ chipData: this.chipData });
    // };


    /* Alternative method using just MaterialUI: */
    // renderChip(data) {

    //     return (
    //         <Chip
    //             key={data.key}
    //             style={this.styles.chip}
    //         >
    //             {data.label}
    //         </Chip>
    //     );
    // }


    render() {
        return (
            <div style={this.styles.wrapper} id={"chipsWrapper"}>
                {/* Alternative method using just MaterialUI: */}
                {/* to create chips from props: */}
                {/* {this.state.chipData.map(this.renderChip, this)} */}
                {/* inset autocomplete component and connect with chips */}
                <ChipInput
                    defaultValue={["test", "random", "chip"]}   //data specific to page to provide likely options
                    onRequestAdd={(chip) => handleAddChip(chip)}
                    onRequestDelete={(chip, index) => handleRequestDelete(chip, index)}
                    id={"chipsComponent"}
                    style={{width:"100%",margin:10,border:"1px solid #DCDCDC"}}
                    fullWidthInput={true}
                    menuStyle={{backgroundColor:"#FFF",color:"#000"}}
                    floatingLabelText={"Type 'n' to add tags:"}        
                  //  hintText={"Type text here"}        //not working
                    dataSource={["name1", "name2", "name3"]}    //all data - not specific to page to provide other options
                />
            </div>

        );
    }
}

// Another possibility is react-chips


// demo of chosen component: https://teamwertarbyte.github.io/material-ui-chip-input/?selectedKind=ChipInput&selectedStory=with%20hintText&full=0&down=1&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel
// git page: https://github.com/TeamWertarbyte/material-ui-chip-input