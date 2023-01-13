module.exports = function reverse(n) {
    return Math.abs(parseInt(String(n).split("").reverse().join("")));
};
