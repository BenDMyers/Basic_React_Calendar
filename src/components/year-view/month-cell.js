import React, {Component} from 'react';

import {months, getWeeks} from '../../CalendarUtils';

class MonthCell extends Component {
    render() {
        let [year, month] = this.props.view;
        let weeks = getWeeks(year, month);
        return (
            <td className="month-cell" onClick={() => this.props.updateView(this.props.view)}>
                <h4>{months[month]}</h4>
                {/*<table className="table table-bordered" style={{borderCollapse: 'separate', borderSpacing: '10px 10px', width: '30%', height: '30%', margin: '0 auto'}}><tbody>
                    {weeks.map(week => {
                            return (
                                <tr key={months[month] + 'w' + weeks.indexOf(week)}>
                                    {week.map(day => {
                                        return (
                                            <td key={months[month] + day[2]} style={{margin: '5px', width: '5px', height: '5px'}}>&nbsp;</td>
                                        );
                                    })}
                                </tr>
                            )
                        }
                    )}
                </tbody></table>*/}
            </td>
        );
    }
}

export default MonthCell;
