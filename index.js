const input = require('fs').readFileSync('./data.txt', 'utf8').split('\r\n');
var [gamma, epsilon, oxy, co] = [[], [], parseInt(mostCommon(input, 0), 2), parseInt(leastCommon(input, 0), 2)];

// Stage 1
for(let i = 0; i < 12; i++) {
    let cond = input.filter(e => e.charAt(i) == '1').length > input.filter(e => e.charAt(i) == '0').length;
    gamma.push(cond ? '1' : '0');
    epsilon.push(cond ? '0' : '1');
}
// Stage 2
function mostCommon(input, iteration) {
    if (input.length == 1) return input[0];
    var [one, zero] = [input.filter(e => e.charAt(iteration) == '1'), input.filter(e => e.charAt(iteration) == '0')];
    if (one.length >= zero.length) {
        return mostCommon(one, iteration + 1);
    } else {
        return mostCommon(zero, iteration + 1);
    };
}
function leastCommon(input, iteration) {
    if (input.length == 1) return input[0];
    var [one, zero] = [input.filter(e => e.charAt(iteration) == '1'), input.filter(e => e.charAt(iteration) == '0')];
    if (one.length < zero.length) {
        return leastCommon(one, iteration + 1);
    } else {
        return leastCommon(zero, iteration + 1);
    };
}
console.log('Stage 1: ' + parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2));
console.log('Stage 2: ' + oxy * co);