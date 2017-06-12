/*
  Returns letters with currencies to shorten them.
  Taken from: http://stackoverflow.com/questions/36734201/how-to-convert-numbers-to-million-in-javascript
 */
export default function currencyRounder(rawValue) {
    if (Math.abs(Number(rawValue)) >= 1.0e+9) {
        return Math.round(Math.abs(Number(rawValue)) / 1.0e+9) + "B";
    }
    if (Math.abs(Number(rawValue)) >= 1.0e+6){
        return Math.round(Math.abs(Number(rawValue)) / 1.0e+6) + "M";
    }
    if (Math.abs(Number(rawValue)) >= 1.0e+3) {
        return Math.round(Math.abs(Number(rawValue)) / 1.0e+3) + "K";
    }
    return Math.abs(Number(rawValue));
}
