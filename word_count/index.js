function getNumberOfWords(){
    var numWords = 0;
   var text= document.getElementById("inputField").value;
    for (var i = 0; i < text.length; i++){
        var character = text[i];
        if(character === " "){
            numWords++;
        }
    }
    var wordcount = numWords + 1;
    /*return wordcount; */
    document.getElementById("show").innerHTML = wordcount;

}



