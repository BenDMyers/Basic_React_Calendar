import React, {Component} from 'react';
import _ from 'lodash';

import {days, months, months_abbrev, getWeeks, getPreviousMonth, getNextMonth, getToday} from '../CalendarUtils';
import DayCell from './day-cell';

export default class MonthlyCalendar extends Component {
    render() {
        let [year, month] = this.props.view;

        let days_th = days.map(d => <th key={d} style={{width: `${100/7}%`, textAlign: 'center'}}>{d}</th>)
        let weeks = getWeeks(year, month)

        return (
            <div style={{width: '100%', height: '100%', marginTop: '8px'}}>
                <table style={{tableLayout: 'fixed', width: '100%', textAlign: 'center'}}><thead><tr>
                    <td><a onClick={() => {
                            this.props.updateView(getPreviousMonth(year, month));
                            this.setState({rerender: true});
                        }}>
                            <i className="arrow arrow-left"></i>
                    </a></td>
                <td><h1 style={{fontWeight: 'bold'}}>{months[month]} {year}</h1></td>
                    <td><a onClick={() => this.props.updateView(getNextMonth(year, month))}>
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
                                        return <DayCell
                                            year={day[0]} month={day[1]} day={day[2]} key={day.toString()}
                                            onClick={(event) => this.props.updateView(day)}
                                            currentView={this.props.view} />;
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
