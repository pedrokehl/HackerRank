var BRACKETS = {
    '{': '}',
    '(': ')',
    '[': ']'
};

var input = '{[()]}';
var result = isBalanced(input) ? 'YES' : 'NO';
console.log(result);

function isBalanced(input) {
    if(!input || input.length % 2 !== 0) {
        return false;
    }
    var iterations = input.length / 2;

    for(var i = 0; i < iterations; i++) {
        var char = input[i];
        if (!BRACKETS[char]) {
            return false;
        }
        var oppositePosition = input.length - i -1;
        if (input[oppositePosition] !== BRACKETS[char]) {
            return false;
        }
    }
    return true;
}