import React, {Component} from 'react';
import _ from 'lodash';

import {days, months, months_abbrev, getWeeks, getPreviousMonth, getNextMonth, getToday} from '../CalendarUtils';

export default class MonthlyCalendar extends Component {
    render() {
        let days_th = days.map(d => <th key={d} style={{width: `${100/7}%`, textAlign: 'center'}}>{d}</th>)
        let weeks = getWeeks(this.props.year, this.props.month)

        return (
            <div style={{width: '100%', height: '100%', marginTop: '8px'}}>
                <table style={{tableLayout: 'fixed', width: '100%', textAlign: 'center'}}><thead><tr>
                    <td><a onClick={() => {
                            this.props.updateView(getPreviousMonth(this.props.year, this.props.month));
                            this.setState({rerender: true});
                        }}>
                            <i className="arrow arrow-left"></i>
                    </a></td>
                <td><h1 style={{fontWeight: 'bold'}}>{months[this.props.month]} {this.props.year}</h1></td>
                    <td><a onClick={() => this.props.updateView(getNextMonth(this.props.year, this.props.month))}>
                        <i className="arrow arrow-right"></i>
                    </a></td>
                </tr></thead></table>
            <table className="table table-bordered" style={{tableLayout: 'fixed', width: '100%', height: '90%'}}>
                    <thead className="thead-dark"><tr>{days_th}</tr></thead>
                    <tbody>
                        {weeks.map((week, index) => {
                            return (
                                <tr key={'w' + index}>
                                    {week.map(day => {
                                        let dayString = day[2];
                                        if(dayString == 1) {
                                            dayString = months_abbrev[day[1]] + " " + dayString;
                                        }
                                        let todayClass = _.isEqual(day, getToday()) ? "today-in-month" : '';
                                        let css = `day-in-month ${todayClass}`
                                        if(day[1] != this.props.month) {
                                            return (
                                                <td className="day-cell table-cell" key={'d' + day[1] + ' ' + day[2]}>
                                                    <span className="day-in-month other-month">{dayString}</span>
                                                </td>
                                            );
                                        }
                                        return (
                                            <td className="day-cell" key={'d' + day[1] + ' ' + day[2]}>
                                                <span className={css}>{dayString}</span>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
