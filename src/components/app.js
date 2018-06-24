import React, { Component } from 'react';
import MonthlyCalendar from '../containers/monthly-calendar';

export default class App extends Component {

    constructor(props) {
        super(props);
        let today = new Date();
        this.state = {
            currentView: [today.getFullYear(), today.getMonth()]
        }
        this.updateView = this.updateView.bind(this);
    }

    render() {
        return (
            <MonthlyCalendar
                month={this.state.currentView[1]}
                year={this.state.currentView[0]}
                updateView={this.updateView}
            />
        );
    }

    updateView(newView) {
        this.setState({currentView: newView})
    }
}
