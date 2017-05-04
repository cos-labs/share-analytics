export default function tsinterval() {
    let d1 = new Date(this.get('gte'));
    let d2 = new Date(this.get('lte'));
    if((d2 - d1) >= 31622400000) { // If our dates are more than a year apart
      return 'month'; // We want to increment our TS data by months
    }
    if((7948800000 <= (d2 - d1)) && ((d2 - d1) < 31622400000)) { // If our dates are less than a year apart but more than three months apart
      return 'week'; // We want to increment our TS data by weeks
    }
    if((d2 - d1) < 7948800000) { // If our data are less than three months apart
      return 'day'; // We want to increment our TS data by days
    }
}
