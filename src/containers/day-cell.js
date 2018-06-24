import React, {Component} from 'react';
import _ from 'lodash';

import {days, months, months_abbrev, getWeeks, getPreviousMonth, getNextMonth, getToday} from '../CalendarUtils';

export default class DayCell extends Component {
    render() {
        let {year, month, day} = this.props;
        let dayString = day;
        if(dayString == 1) {
            dayString = months_abbrev[month] + " " + dayString;
        }
        let todayClass = _.isEqual([year, month, day], getToday()) ? "today-in-month" : '';
        let otherMonthClass = month === this.props.currentView[1] ? '' : 'other-month';
        let css = `day-in-month ${todayClass} ${otherMonthClass}`

        return (
            <td className="day-cell" key={`${year}${month}${day}`} onClick={this.props.onClick}>
                <span className={css}>{dayString}</span>
            </td>
        );
    }
}
