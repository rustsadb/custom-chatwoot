import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default {
  methods: {
    messageStamp(time, dateFormat = 'h:mm a', options = {}) {
      const unixTime = fromUnixTime(time);
      return format(unixTime, dateFormat, options);
    },
    dynamicTime(time, options = { addSuffix: true }) {
      const unixTime = fromUnixTime(time);
      return formatDistanceToNow(unixTime, options);
    },
    dateFormat(time, dateFormat = 'MMM d, yyyy', options = {}) {
      const unixTime = fromUnixTime(time);
      return format(unixTime, dateFormat, options);
    },
    shortTimestamp(time) {
      const convertToShortTime = time
        .replace(/about|over|almost|/g, '')
        .replace('less than a minute ago', 'now')
        .replace(' minute ago', 'm')
        .replace(' minutes ago', 'm')
        .replace('a minute ago', 'm')
        .replace('an hour ago', 'h')
        .replace(' hour ago', 'h')
        .replace(' hours ago', 'h')
        .replace(' day ago', 'd')
        .replace('a day ago', 'd')
        .replace(' days ago', 'd')
        .replace('a month ago', 'mo')
        .replace(' months ago', 'mo')
        .replace(' month ago', 'mo')
        .replace('a year ago', 'y')
        .replace(' year ago', 'y')
        .replace(' years ago', 'y');
      return convertToShortTime;
    },
  },
};
