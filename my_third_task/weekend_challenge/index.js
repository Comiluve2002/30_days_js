function getNumberOfWords(string){
    var counter = 0;
    for (var i = 0; i < string.length; i++){
        var character = string[i];
        if(character === " "){
            counter++;
        }
    }
    var wordcount = counter + 1;
    return wordcount; 
}

console.log(getNumberOfWords("my name is comfort"));
