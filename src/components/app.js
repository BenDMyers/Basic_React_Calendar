import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {dateArrayToString} from '../CalendarUtils';
import MonthView from './month-view/month-view';
import {updateView} from '../actions/index';

class App extends Component {
    componentWillMount() {
        document.title = dateArrayToString(this.props.view);
    }

    componentDidUpdate() {
        document.title = dateArrayToString(this.props.view);
    }

    render() {
        return (
            <MonthView view={this.props.view} updateView={this.props.updateView} />
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
