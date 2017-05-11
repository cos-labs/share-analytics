/*
  Returns letters with currencies to shorten them.
  Taken from: http://stackoverflow.com/questions/36734201/how-to-convert-numbers-to-million-in-javascript
 */
export default function currencyRounder(rawValue) {

  // Nine Zeroes for Billions
  return Math.abs(Number(rawValue)) >= 1.0e+9

    ? Math.round(Math.abs(Number(rawValue)) / 1.0e+9) + "B"
    // Six Zeroes for Millions
    : Math.abs(Number(rawValue)) >= 1.0e+6

      ? Math.round(Math.abs(Number(rawValue)) / 1.0e+6) + "M"
      // Three Zeroes for Thousands
      : Math.abs(Number(rawValue)) >= 1.0e+3

        ? Math.round(Math.abs(Number(rawValue)) / 1.0e+3) + "K"

        // Otherwise return the number
        : Math.abs(Number(rawValue));
}
