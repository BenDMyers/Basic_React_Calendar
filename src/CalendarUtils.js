import _ from 'lodash';

import {chunkArray} from './Utils';

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const days_abbrev = days.map(d => d.substring(0, 4));
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']
export const months_abbrev = months.map(m => m.substring(0, 3));

export function getToday() {
    let today = new Date();
    return [today.getFullYear(), today.getMonth(), today.getDate()];
}

export function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

export function isLeapYear(year) {
    return new Date(year, 1, 29).getDate() === 29;
}

export function getNextMonth(year, month) {
    if(month == 11) {
        return [year + 1, 0];
    }
    else {
        return [year, month + 1];
    }
}

export function getPreviousMonth(year, month) {
    if(month == 0) {
        return [year - 1, 11];
    }
    else {
        return [year, month - 1];
    }
}

export function getNextDay(year, month, day) {
    if(day == getDaysInMonth(year, month)) {
        return [...getNextMonth(year, month), 1];
    }
    else {
        return [year, month, day+1];
    }
}

export function getPreviousDay(year, month, day) {
    if(day == 1) {
        return [...getPreviousMonth(year, month), getDaysInMonth(...getPreviousMonth(year, month))]
    }
    else {
        return [year, month, day-1];
    }
}

export function getWeeks(year, month) {
    let dates = _.range(getDaysInMonth(year, month)).map(i => [year, month, i + 1])
    let first = new Date(year, month, 1);
    for(let i = 0; i < first.getDay(); i++) {
        dates.unshift(getPreviousDay(...dates[0]));
    }
    while(dates.length % 7 != 0) {
        dates.push(getNextDay(...dates[dates.length - 1]))
    }
    return chunkArray(dates, 7);
}
