import React, {Component} from 'react';

import {getPreviousMonth, getNextMonth, dateArrayToString} from '../CalendarUtils';

class Header extends Component {
    render() {
        let [year, month] = this.props.view;

        return (
            <table style={{tableLayout: 'fixed', width: '100%', textAlign: 'center'}}><thead><tr>
                <td><a onClick={this.props.onLeft}>
                    <i className="arrow arrow-left"></i>
                </a></td>
            <td><h1 style={{fontWeight: 'bold'}}>{dateArrayToString(this.props.view)}</h1></td>
                <td><a onClick={this.props.onRight}>
                    <i className="arrow arrow-right"></i>
                </a></td>
            </tr></thead></table>
        );
    }
}

export default Header;
