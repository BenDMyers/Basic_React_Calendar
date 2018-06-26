import React, {Component} from 'react';

import Header from '../header';
import MonthCell from './month-cell';

import {months} from '../../CalendarUtils';
import {chunkArray} from '../../Utils';

class YearView extends Component {
    render() {
        let [year] = this.props.view;
        let quarters = chunkArray(months, 4);
        console.log(quarters);

        return (
            <div style={{width: '100%', height: '100%', marginTop: '8px'}}>
                <Header
                    view={this.props.view} updateView={this.props.updateView}
                    onLeft={() => this.props.updateView([year - 1])}
                    onRight={() => this.props.updateView([year + 1])}
                />
                <table className="table table-bordered" style={{tableLayout: 'fixed', width: '100%', height: '90%'}}><tbody>
                    {quarters.map(quarter => {
                        return (
                            <tr key={quarter[0] + quarter[1] + quarter[2]}>{quarter.map(mon => {
                                return (
                                    <MonthCell key={mon} view={[year, months.indexOf(mon)]} updateView={(newView) => this.props.updateView(newView)} />
                                );
                            })}</tr>
                        );
                    })}
                </tbody></table>
            </div>
        );
    }
}

export default YearView;
