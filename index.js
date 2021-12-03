const input = require('fs').readFileSync('./data.txt', 'utf8').toString().split('\r\n');
var [array, array2, iteration, gamma, epsilon] = [[], [], 0, [], [], []];

// Stage 1
while (iteration < 12) {
    gamma = (averageBit(input, iteration, gamma));
    iteration++;
}
gamma.forEach(e => {
    if (e == '1') {
        epsilon.push('0');
    } else {
        epsilon.push('1');
    };
});
var result = parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2);
console.log(result);

function averageBit(input, iteration, gamma) {
    var [zero, one] = [0, 0];
    input.forEach(e => {
        array = e.split("");
        array2.push(array);
    });
    array2.forEach(e => {
        if(e[iteration] == 0) {
            zero++; 
        } else if(e[iteration] == 1) {
            one++;
        };
    });
    
    if (parseInt(zero) > parseInt(one)) {
        gamma.push('0');
    } else if (parseInt(zero) < parseInt(one)) {
        gamma.push('1');
    } else {
        gamma.push('1');
        oxy.push('1');
    };
    return gamma;
}

// Stage 2
var [oxy, index] = [[], 0];

while (index < 12) {
    
    


    index++;
};

console.log(oxy);


