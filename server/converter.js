const DECIMAL = 1000;
exports.toCelsius = (fahrenheit) => {
    if (!fahrenheit) {
        return NaN;
    }
    return Math.round(((fahrenheit - 32) * 5 / 9) * DECIMAL) / DECIMAL;
};

exports.toFahrenheit = (celsius) => {
    if (!celsius) {
        return NaN;
    }
    return Math.round((celsius * 1.8 + 32) * DECIMAL) / DECIMAL;
};
