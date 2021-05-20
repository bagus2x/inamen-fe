import moment from 'moment';

// call this function, passing-in your date
function dateToFromNowDaily(epoch: number) {
    // get from-now for this date
    var fromNow = moment(epoch).fromNow();

    // ensure the date is displayed with today and yesterday
    return moment.unix(epoch).calendar(null, {
        // when the date is closer, specify custom values
        lastWeek: '[Last] dddd',
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        // when the date is further away, use from-now functionality
        sameElse: function () {
            return '[' + fromNow + ']';
        }
    });
}

export default dateToFromNowDaily;
