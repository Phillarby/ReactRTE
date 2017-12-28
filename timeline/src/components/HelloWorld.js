import React from 'react';
import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline';
import Checkbox from 'material-ui/Checkbox';
import Event from './CustomTimelineEvent';
import Message from 'material-ui-icons/Message';

const itemStyle = {
    backgroundColor: '#ffffff',
    boxShadow: 'inset 0px 0px 20px rgba(0,0,0,0.2)'
};

const IconStyle = {
    color: '#cccccc',
    height: '20px'
}

export default class HelloWorld extends React.Component {

    render() {
        return (
            <Timeline>
                <TimelineEvent
                    title='1st Jan 2018'
                    icon={<span>1st Jan</span>}
                    iconColor='#6fba1c'
                >
                    <Event />
                </TimelineEvent>
                <TimelineEvent
                    createdAt='2nd Jan 2018'
                    icon={<Message />}
                    iconColor='#03a9f4'
                >
                    <div style={itemStyle}>
                        <Checkbox />


                        <p>Subject: Any updates?</p>
                        <p>
                            Like we talked, you said that you would share the shipment details? This is an urgent order and so I am
                            losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle
                            reminder if you are on track already!
                        </p>
                        <p>- Maya</p></div>


                    <div style={itemStyle}>
                        <checkbox />
                        <p>Subject: Any updates?</p>
                        <p>
                            Like we talked, you said that you would share the shipment details? This is an urgent order and so I am
                            losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle
                            reminder if you are on track already!
                        </p>
                        <p>- Maya</p>
                    </div>
                </TimelineEvent>
            </Timeline>
        );
    }
}