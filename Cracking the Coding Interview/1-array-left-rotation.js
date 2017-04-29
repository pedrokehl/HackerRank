var move = 4;
var input = [1, 2, 3, 4, 5];
var size = input.length;
var result = [];

for(var i=move; i < size; i++) result.push(input[i]);
for(var j=move; j > 0; j--) result.push(input[move-j]);

console.log(result);