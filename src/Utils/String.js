export function Capitalize (...strings) {
    return strings.reduce(
        (memo, string) => `${memo} ${string.split(' ').map(
            (substring) => `${substring[0].toUpperCase()}${substring.slice(1)}`
        )}`
    , '');
};