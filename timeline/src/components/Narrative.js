import React from 'react';
import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline';
import Event from './CustomTimelineEvent';
import Message from 'material-ui-icons/Message';

const itemStyle = {
    backgroundColor: '#cccccc',
    boxShadow: '0px'
};

const contentStyle = {
    boxShadow: '0px'
};

const IconStyle = {
    color: '#cccccc',
    height: '20px'
}

export default class Narrative extends React.Component {

    getEvents(start, end) {

        let events = [];

        for (let i = start; i <= end; i++) {
            events.push(<Event number={i} />);
        }

        return events;
    }

    render() {
        return (
            <Timeline>
                <TimelineEvent
                    title='1st Jan 2018'
                    icon={<Message />}
                    iconColor='#6fba1c'
                    contentStyle={contentStyle}
                >
                    {this.getEvents(1,5)}
                </TimelineEvent>
                <TimelineEvent
                    title='2nd Jan 2018'
                    icon={<Message />}
                    iconColor='#6fba1c'
                    contentStyle={contentStyle}>
                    {this.getEvents(6,8)}
                </TimelineEvent>
                <TimelineEvent
                    title='3rd Jan 2018'
                    icon={<Message />}
                    iconColor='#6fba1c'
                    contentStyle={contentStyle}>
                    {this.getEvents(9,11)}
                </TimelineEvent>
            </Timeline>
        );
    }
}