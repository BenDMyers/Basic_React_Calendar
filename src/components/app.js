import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MonthlyCalendar from '../containers/monthly-calendar';
import {updateView} from '../actions/index';

class App extends Component {
    render() {
        return (
            <MonthlyCalendar
                tabindex="0"
                view={this.props.view}
                updateView={this.props.updateView}
                onKeyDown={event => this.onKeyPressed(event)}
            />
        );
    }
}

function mapStateToProps(state) {
    return {view: state.view};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateView: updateView}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
