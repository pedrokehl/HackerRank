var maganizeWords = ['give', 'me', 'one', 'grand', 'today', 'night'];
var ransomNoteWords = ['give', 'one', 'grand', 'today'];

var result = isWordsAvailable(maganizeWords, ransomNoteWords) ? 'Yes' : 'No';
console.log(result);


function isWordsAvailable(availableWords, wantedWords) {
    var avDict = {};

    availableWords.forEach(function(availableWord) {
        avDict[availableWord] = avDict[availableWord] ? avDict[availableWord]+1 : 1;
    });

    for(var i = 0; i < wantedWords.length; i++) {
        var wantedWord = wantedWords[i];
        if(avDict[wantedWord]) {
            avDict[wantedWord] = avDict[wantedWord] - 1;
        }
        else {
            return false;
        }
    }

    return true;
}
