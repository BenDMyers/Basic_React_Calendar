import React, {Component} from 'react';

import {getPreviousMonth, getNextMonth} from '../../CalendarUtils';
import Header from '../header';
import MonthlyCalendar from './monthly-calendar';

class MonthView extends Component {
    render() {
        let [year, month] = this.props.view;

        return (
            <div style={{width: '100%', height: '100%', marginTop: '8px'}}>
                <Header
                    view={this.props.view} updateView={this.props.updateView}
                    onLeft={() => this.props.updateView(getPreviousMonth(year, month))}
                    onRight={() => this.props.updateView(getNextMonth(year, month))}
                    onClickTitle={() => this.props.updateView([year])}
                />
                <MonthlyCalendar view={this.props.view} updateView={this.props.updateView} />
            </div>
        );
    }
}

export default MonthView;
