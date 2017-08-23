var array = [1, 2, 3, 4, 5];
var move = 4;

var result = getArrayLeftRotated(array, move);
console.log(result);

function getArrayLeftRotated(array, move) {
    var size = array.length;
    var result = [];

    for(var i=move; i < size; i++) result.push(array[i]);
    for(var j=move; j > 0; j--) result.push(array[move-j]);

    return result;
}
