var result = wordsToRemove('cde', 'abc');
console.log(result);

function wordsToRemove(a, b) {
    var bLength = b.length;
    var aLength = a.length;

    var totalToRemove = aLength + bLength;
    var aDict = {};
    for(var i=0; i<aLength; i++) {
        var char = a[i];
        aDict[char] = aDict[char] ? aDict[char]+1 : 1;
    }

    for(var j=0; j<bLength; j++) {
        var bChar = b[j];
        if(aDict[bChar]) {
            aDict[bChar] = aDict[bChar] - 1;
            totalToRemove = totalToRemove - 2;
        }
    }

    return totalToRemove;
}
